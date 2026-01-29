// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {DinoFactory} from "@dino/DinoFactory.sol";
import {JobsRegistry} from "@registry/JobsRegistry.sol";
import {EmeraldERC20} from "@economy/tokens/EmeraldERC20.sol";

/**
 * @title JobsModule
 */
contract JobsModule is AccessControl {
    /**
     * @dev Constants.
     */
    uint256 private constant DAY = 1 days;

    /**
     * @dev Immutables.
     */
    EmeraldERC20 public immutable emerald;
    DinoFactory public immutable dinoFactory;
    JobsRegistry public immutable jobsRegistry;

    /**
     * @dev Mappings.
     */
    mapping(uint256 => uint256) public jobOf;
    mapping(uint256 => uint256) public lastClaimDayStart;

    /**
     * @dev Errors.
     */
    error InvalidJobId();
    error NotDinoAccount();
    error PaymentFailed();
    error NoJobAssigned();
    error AlreadyClaimed();

    /**
     * @dev Events.
     */
    event JobSwitched(uint256 indexed tokenId, uint256 indexed jobId, uint256 trainingCost);
    event SalaryClaimed(uint256 indexed tokenId, uint256 indexed jobId, uint256 amount, uint256 dayIndex);

    /**
     * @dev Constructor.
     */
    constructor(address _owner, EmeraldERC20 _emerald, DinoFactory _dinoFactory, JobsRegistry _dinoJobsRegistry) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `_owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);

        emerald = _emerald;
        dinoFactory = _dinoFactory;
        jobsRegistry = _dinoJobsRegistry;
    }

    /**
     * @dev
     */
    function switchJob(uint256 _tokenId, uint256 _jobId) external {
        DinoFactory.Dino memory dino = dinoFactory.getDino(_tokenId);

        if (address(dino.dinoAccount) != msg.sender) revert NotDinoAccount();
        if (!jobsRegistry.jobExists(_jobId)) revert InvalidJobId();

        JobsRegistry.Job memory job = jobsRegistry.getJob(_jobId);
        if (job.trainingCost > 0) {
            bool ok = emerald.transferFrom(msg.sender, address(0), job.trainingCost);
            if (!ok) revert PaymentFailed();
        }

        jobOf[_tokenId] = _jobId;
        emit JobSwitched(_tokenId, _jobId, job.trainingCost);
    }

    /**
     * @dev
     */
    function claimSalary(uint256 _tokenId) external {
        DinoFactory.Dino memory dino = dinoFactory.getDino(_tokenId);

        if (address(dino.dinoAccount) != msg.sender) revert NotDinoAccount();

        uint256 jobId = jobOf[_tokenId];
        if (!jobsRegistry.jobExists(jobId)) revert InvalidJobId();

        uint256 dayStart = block.timestamp - (block.timestamp % DAY);
        if (lastClaimDayStart[_tokenId] == dayStart) revert AlreadyClaimed();
        lastClaimDayStart[_tokenId] = dayStart;

        JobsRegistry.Job memory job = jobsRegistry.getJob(jobId);
        emerald.mint(msg.sender, job.dailyPay);

        emit SalaryClaimed(_tokenId, jobId, job.dailyPay, dayStart / DAY);
    }
}
