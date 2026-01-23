// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {DinoRegistry} from "../dino/DinoRegistry.sol";
import {DinoJobsRegistry, DinoJob} from "./DinoJobsRegistry.sol";

/**
 * @title DinoJobs
 */
contract DinoJobs is AccessControl {
    IERC20 public immutable emerald;

    DinoRegistry public immutable dinoRegistry;
    DinoJobsRegistry public immutable dinoJobsRegistry;

    mapping(uint256 => uint256) public jobOf; // tokenId => jobId
    mapping(uint256 => uint256) public lastClaimDay; // tokenId => dayIndex (UTC days)

    error InvalidJobId();
    error NotDinoAccount();
    error PaymentFailed();
    error NoJobAssigned();
    error AlreadyClaimed();

    event JobApplied(uint256 indexed tokenId, uint256 indexed jobId, uint256 trainingCost);
    event SalaryClaimed(uint256 indexed tokenId, uint256 indexed jobId, uint256 amount, uint256 dayIndex);

    constructor(address owner, IERC20 _emerald, DinoJobsRegistry _dinoRegistry, DinoJobsRegistry _dinoJobsRegistry) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        emerald = _emerald;
        dinoRegistry = _dinoRegistry;
        dinoJobsRegistry = _dinoJobsRegistry;
    }

    /**
     * @notice Apply a job to a Dino.
     * @dev Caller must be the DinoAccount for the tokenId. Job must exist in the catalog.
     */
    function setJob(uint256 tokenId, uint256 jobId) external {
        if (dinoRegistry.accountOf(tokenId) != msg.sender) revert NotDinoAccount();
        if (!dinoJobsRegistry.jobExists(jobId)) revert InvalidJobId();

        (string memory name, uint256 dailyPay, uint256 trainingCost, uint16 requiredLevel) =
            dinoJobsRegistry.jobs(jobId);
        DinoJob memory job =
            DinoJob({name: name, dailyPay: dailyPay, trainingCost: trainingCost, requiredLevel: requiredLevel});
        if (job.trainingCost > 0) {
            bool ok = emerald.transferFrom(msg.sender, address(this), job.trainingCost);
            if (!ok) revert PaymentFailed();
        }

        jobOf[tokenId] = jobId;
        emit JobApplied(tokenId, jobId, job.trainingCost);
    }

    /**
     * @notice Claim the daily salary for the Dino's current job. One claim per UTC day.
     * @dev Caller must be the DinoAccount for the tokenId.
     */
    function claimSalary(uint256 tokenId) external {
        if (dinoRegistry.accountOf(tokenId) != msg.sender) revert NotDinoAccount();

        uint256 jobId = jobOf[tokenId];
        if (!dinoJobsRegistry.jobExists(jobId)) revert InvalidJobId();

        uint256 day = block.timestamp / 1 days;
        if (lastClaimDay[tokenId] == day) revert AlreadyClaimed();
        lastClaimDay[tokenId] = day;

        (, uint256 dailyPay,,) = dinoJobsRegistry.jobs(jobId);
        bool ok = emerald.transfer(msg.sender, dailyPay);
        if (!ok) revert PaymentFailed();

        emit SalaryClaimed(tokenId, jobId, dailyPay, day);
    }
}
