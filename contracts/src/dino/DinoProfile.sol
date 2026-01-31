// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {DinoFactory} from "@dino/DinoFactory.sol";
import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

/**
 * @dev
 */
contract DinoProfile is AccessControl {
    /**
     * @dev Constants.
     */
    bytes32 public constant FACTORY_ROLE = keccak256("FACTORY_ROLE");

    /**
     * @dev Struct Profile.
     */
    struct Profile {
        uint256 level;
        uint256 xp;
    }

    /**
     * @dev Immutable.
     */

    /**
     * @dev Mappings.
     */
    mapping(uint256 => Profile) public profileOf;

    /**
     * @dev Errors.
     */

    /**
     * @dev Events.
     */
    event InitializedProfile(uint256 indexed dinoId);

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
    function getProfile(uint256 _dinoId) external view returns (Profile memory profile) {
        profile = profileOf[_dinoId];
    }

    /**
     * @dev
     */
    function initialize(uint256 _dinoId) external onlyRole(FACTORY_ROLE) {
        profileOf[_dinoId] = Profile({level: 1, xp: 0});

        emit InitializedProfile({dinoId: _dinoId});
    }
}
