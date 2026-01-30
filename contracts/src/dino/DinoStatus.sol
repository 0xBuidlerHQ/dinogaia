// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {DinoFactory} from "@dino/DinoFactory.sol";
import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

/**
 * @dev
 */
contract DinoStatus is AccessControl {
    /**
     * @dev Struct Status.
     */
    struct Status {
        bool alive;

        uint256 health;
    }

    /**
     * @dev Immutable.
     */

    /**
     * @dev Mappings.
     */
    mapping(uint256 => Status) public statusOf;

    /**
     * @dev Errors.
     */

    /**
     * @dev Events.
     */
    event InitializedStatus(uint256 indexed dinoId);

    /**
     * @dev Constructor.
     */
    constructor(address _owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `_owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
    }

    /**
     * @dev
     */
    function initialize(uint256 _dinoId) external onlyRole(DEFAULT_ADMIN_ROLE) {
        statusOf[_dinoId] = Status({alive: true, health: 100});

        emit InitializedStatus({dinoId: _dinoId});
    }

    /**
     * @dev
     */
    function getStatus(uint256 _dinoId) external view returns (Status memory status) {
        status = statusOf[_dinoId];
    }

    /**
     * @dev
     */
    function getStatusOf(uint256 _dinoId) external view returns (Status memory status) {
        status = statusOf[_dinoId];
    }
}
