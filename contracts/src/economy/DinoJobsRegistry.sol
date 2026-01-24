// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

struct DinoJob {
    string name;
    uint256 dailyPay;
    uint256 trainingCost;
    uint16 requiredLevel;
}

contract DinoJobsRegistry is AccessControl {
    mapping(uint256 => DinoJob) public jobs;
    uint256[] public jobIds;
    uint256 public nextJobId = 1;

    error EmptyName();
    error InvalidPay();
    error InvalidJobId();
    error InvalidJob();

    event JobCreated(uint256 indexed jobId, DinoJob dinoJob);
    event JobUpdated(uint256 indexed jobId, DinoJob dinoJob);

    constructor(address owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        _initDinoJobsRegistry();
    }

    /**
     * @dev
     */
    function _initDinoJobsRegistry() internal {
        // Starter
        _createJob(DinoJob({name: "Unemployed", dailyPay: 1, trainingCost: 0, requiredLevel: 0}));

        // Crime / Work path
        _createJob(DinoJob({name: "Swindler", dailyPay: 3, trainingCost: 75, requiredLevel: 0}));
        _createJob(DinoJob({name: "Worker", dailyPay: 6, trainingCost: 150, requiredLevel: 0}));
        _createJob(DinoJob({name: "Thief", dailyPay: 8, trainingCost: 200, requiredLevel: 0}));

        // Public services
        _createJob(DinoJob({name: "Police Officer", dailyPay: 10, trainingCost: 250, requiredLevel: 0}));
        _createJob(DinoJob({name: "Firefighter", dailyPay: 12, trainingCost: 300, requiredLevel: 0}));
        _createJob(DinoJob({name: "Royal Guard", dailyPay: 14, trainingCost: 350, requiredLevel: 0}));

        // Knowledge / social
        _createJob(DinoJob({name: "Seer", dailyPay: 16, trainingCost: 425, requiredLevel: 0}));
        _createJob(DinoJob({name: "Teacher", dailyPay: 18, trainingCost: 500, requiredLevel: 0}));

        // Magic / combat progression
        _createJob(DinoJob({name: "Mage", dailyPay: 21, trainingCost: 575, requiredLevel: 0}));
        _createJob(DinoJob({name: "Professional Hunter", dailyPay: 24, trainingCost: 650, requiredLevel: 0}));
        _createJob(DinoJob({name: "Sorcerer", dailyPay: 27, trainingCost: 750, requiredLevel: 0}));

        // Authority / corruption
        _createJob(DinoJob({name: "Royal Guard Captain", dailyPay: 29, trainingCost: 800, requiredLevel: 0}));
        _createJob(DinoJob({name: "Vendor", dailyPay: 33, trainingCost: 900, requiredLevel: 0}));
        _createJob(DinoJob({name: "Indigenous Hunter", dailyPay: 35, trainingCost: 1000, requiredLevel: 0}));

        // Alchemy ladder
        _createJob(DinoJob({name: "Apprentice Chemist", dailyPay: 43, trainingCost: 1200, requiredLevel: 0}));
        _createJob(DinoJob({name: "Chemist", dailyPay: 53, trainingCost: 1500, requiredLevel: 0}));

        // Endgame authority
        _createJob(DinoJob({name: "General of the Royal Brigades", dailyPay: 64, trainingCost: 1800, requiredLevel: 0}));
        _createJob(DinoJob({name: "General of the Royal Armies", dailyPay: 85, trainingCost: 2500, requiredLevel: 0}));
    }

    /**
     * @dev
     */
    function createJob(DinoJob memory _job) public onlyRole(DEFAULT_ADMIN_ROLE) returns (uint256 jobId) {
        jobId = _createJob(_job);
    }

    /**
     * @dev
     */
    function updateJob(uint256 _jobId, DinoJob memory _job) public onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_jobId >= nextJobId) revert InvalidJobId();
        if (bytes(_job.name).length == 0) revert EmptyName();
        if (_job.dailyPay == 0) revert InvalidPay();

        jobs[_jobId] = _job;

        emit JobUpdated(_jobId, _job);
    }

    /**
     * @dev
     */
    function jobExists(uint256 _jobId) public view returns (bool) {
        if (_jobId >= nextJobId) return false;
        return true;
    }

    /**
     * @dev
     */
    function job(uint256 _jobId) public view returns (DinoJob memory dinoJob) {
        if (!jobExists(_jobId)) revert InvalidJob();
        return jobs[_jobId];
    }

    /**
     * @dev
     */
    function _createJob(DinoJob memory _job) internal returns (uint256) {
        if (bytes(_job.name).length == 0) revert EmptyName();
        if (_job.dailyPay == 0) revert InvalidPay();

        uint256 jobId = nextJobId;
        jobs[jobId] = _job;
        jobIds.push(jobId);

        emit JobCreated(jobId, _job);

        nextJobId++;
        return jobId;
    }
}
