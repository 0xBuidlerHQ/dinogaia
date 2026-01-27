// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {DinoFactory, Dino} from "@dino/DinoFactory.sol";

import {JobsRegistry, DinoJob} from "@registry/JobsRegistry.sol";

import {EmeraldERC20} from "@economy/tokens/EmeraldERC20.sol";

/**
 * @title JobsManager
 */
contract JobsModule is AccessControl {
    EmeraldERC20 public immutable emerald;

    DinoFactory public immutable dinoFactory;
    JobsRegistry public immutable jobsRegistry;

    mapping(uint256 => uint256) public jobOf;
    mapping(uint256 => uint256) public lastClaimDay;

    error InvalidJobId();
    error NotDinoAccount();
    error PaymentFailed();
    error NoJobAssigned();
    error AlreadyClaimed();

    event JobSwitched(uint256 indexed tokenId, uint256 indexed jobId, uint256 trainingCost);
    event SalaryClaimed(uint256 indexed tokenId, uint256 indexed jobId, uint256 amount, uint256 dayIndex);

    constructor(address owner, EmeraldERC20 _emerald, DinoFactory _dinoFactory, JobsRegistry _dinoJobsRegistry) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        emerald = _emerald;
        dinoFactory = _dinoFactory;
        jobsRegistry = _dinoJobsRegistry;
    }

    /**
     * @dev
     */
    function switchJob(uint256 tokenId, uint256 jobId) external {
        Dino memory dino = dinoFactory.getDino(tokenId);

        if (address(dino.dinoAccount) != msg.sender) revert NotDinoAccount();
        if (!jobsRegistry.jobExists(jobId)) revert InvalidJobId();

        DinoJob memory job = jobsRegistry.job(jobId);
        if (job.trainingCost > 0) {
            bool ok = emerald.transferFrom(msg.sender, address(0), job.trainingCost);
            if (!ok) revert PaymentFailed();
        }

        jobOf[tokenId] = jobId;
        emit JobSwitched(tokenId, jobId, job.trainingCost);
    }

    /**
     * @dev
     */
    function claimSalary(uint256 tokenId) external {
        Dino memory dino = dinoFactory.getDino(tokenId);

        if (address(dino.dinoAccount) != msg.sender) revert NotDinoAccount();

        uint256 jobId = jobOf[tokenId];
        if (!jobsRegistry.jobExists(jobId)) revert InvalidJobId();

        uint256 day = block.timestamp / 1 days;
        if (lastClaimDay[tokenId] == day) revert AlreadyClaimed();
        lastClaimDay[tokenId] = day;

        DinoJob memory job = jobsRegistry.job(jobId);
        emerald.mint(msg.sender, job.dailyPay);

        emit SalaryClaimed(tokenId, jobId, job.dailyPay, day);
    }
}
