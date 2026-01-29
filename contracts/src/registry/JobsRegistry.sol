// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract JobsRegistry is AccessControl {
    /**
     * @dev Struct Job.
     */
    struct Job {
        string name;
        uint256 dailyPay;
        uint256 trainingCost;
        uint16 requiredLevel;
    }

    /**
     * @dev Variables.
     */
    uint256[] public jobIds;
    uint256 public jobIdsIndex = 0;

    /**
     * @dev Mappings.
     */
    mapping(uint256 => Job) public jobs;

    /**
     * @dev Errors.
     */
    error EmptyName();
    error InvalidJobId();
    error InvalidJob();

    /**
     * @dev Events.
     */
    event JobCreated(uint256 indexed jobId, Job job);
    event JobUpdated(uint256 indexed jobId, Job job);

    /**
     * @dev Constructor.
     */
    constructor(address owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        _initJobsRegistry();
    }

    /**
     * @dev
     */
    function createJob(Job memory _job) public onlyRole(DEFAULT_ADMIN_ROLE) returns (uint256 jobId) {
        jobId = _createJob(_job);
    }

    /**
     * @dev
     */
    function updateJob(uint256 _jobId, Job memory _job) public onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_jobId >= jobIdsIndex) revert InvalidJobId();
        if (bytes(_job.name).length == 0) revert EmptyName();

        jobs[_jobId] = _job;

        emit JobUpdated(_jobId, _job);
    }

    /**
     * @dev
     */
    function jobExists(uint256 _jobId) public view returns (bool) {
        if (_jobId >= jobIdsIndex) return false;
        return true;
    }

    /**
     * @dev
     */
    function getJob(uint256 _jobId) public view returns (Job memory job) {
        if (!jobExists(_jobId)) revert InvalidJob();
        return jobs[_jobId];
    }

    /**
     * @dev
     */
    function getAllJobs() external view returns (Job[] memory allJobs) {
        uint256 len = jobIdsIndex;
        allJobs = new Job[](len);
        for (uint256 i = 0; i < len; i++) {
            allJobs[i] = jobs[i];
        }
    }

    /**
     * @dev
     */
    function _initJobsRegistry() internal {
        // Starter
        _createJob(Job({name: "Unemployed", dailyPay: 1, trainingCost: 0, requiredLevel: 0}));

        // Crime / Work path
        _createJob(Job({name: "Swindler", dailyPay: 3, trainingCost: 75, requiredLevel: 0}));
        _createJob(Job({name: "Worker", dailyPay: 6, trainingCost: 150, requiredLevel: 0}));
        _createJob(Job({name: "Thief", dailyPay: 8, trainingCost: 200, requiredLevel: 0}));

        // Public services
        _createJob(Job({name: "Police Officer", dailyPay: 10, trainingCost: 250, requiredLevel: 0}));
        _createJob(Job({name: "Firefighter", dailyPay: 12, trainingCost: 300, requiredLevel: 0}));
        _createJob(Job({name: "Royal Guard", dailyPay: 14, trainingCost: 350, requiredLevel: 0}));

        // Knowledge / social
        _createJob(Job({name: "Seer", dailyPay: 16, trainingCost: 425, requiredLevel: 0}));
        _createJob(Job({name: "Teacher", dailyPay: 18, trainingCost: 500, requiredLevel: 0}));

        // Magic / combat progression
        _createJob(Job({name: "Mage", dailyPay: 21, trainingCost: 575, requiredLevel: 0}));
        _createJob(Job({name: "Professional Hunter", dailyPay: 24, trainingCost: 650, requiredLevel: 0}));
        _createJob(Job({name: "Sorcerer", dailyPay: 27, trainingCost: 750, requiredLevel: 0}));

        // Authority / corruption
        _createJob(Job({name: "Royal Guard Captain", dailyPay: 29, trainingCost: 800, requiredLevel: 0}));
        _createJob(Job({name: "Vendor", dailyPay: 33, trainingCost: 900, requiredLevel: 0}));
        _createJob(Job({name: "Indigenous Hunter", dailyPay: 35, trainingCost: 1000, requiredLevel: 0}));

        // Alchemy ladder
        _createJob(Job({name: "Apprentice Chemist", dailyPay: 43, trainingCost: 1200, requiredLevel: 0}));
        _createJob(Job({name: "Chemist", dailyPay: 53, trainingCost: 1500, requiredLevel: 0}));

        // Endgame authority
        _createJob(Job({name: "General of the Royal Brigades", dailyPay: 64, trainingCost: 1800, requiredLevel: 0}));
        _createJob(Job({name: "General of the Royal Armies", dailyPay: 85, trainingCost: 2500, requiredLevel: 0}));
    }

    /**
     * @dev
     */
    function _createJob(Job memory _job) internal returns (uint256 jobId) {
        if (bytes(_job.name).length == 0) revert EmptyName();

        jobId = jobIdsIndex;
        jobs[jobId] = _job;
        jobIds.push(jobId);

        emit JobCreated(jobId, _job);

        jobIdsIndex++;
    }
}
