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
    bytes32 public constant STATUS_ROLE = keccak256("STATUS_ROLE");

    /**
     * @dev Struct Profile.
     */
    struct Profile {
        bool alive;
        //
        uint256 health;
        //
        bool hungry;
        bool thirsty;
        //
        uint256 weight;
        //
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
        _grantRole(STATUS_ROLE, _owner);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        profileOf[_dinoId] =
            Profile({alive: true, health: 100, hungry: true, weight: 1, thirsty: true, level: 1, xp: 0});

        emit InitializedProfile({dinoId: _dinoId});
    }

    function setHungry(uint256 _dinoId, bool _hungry) external onlyRole(STATUS_ROLE) {
        profileOf[_dinoId].hungry = _hungry;
    }

    function addWeight(uint256 _dinoId, uint256 _delta) external onlyRole(STATUS_ROLE) {
        profileOf[_dinoId].weight += _delta;
    }

    function addHealth(uint256 _dinoId, uint256 _delta) external onlyRole(STATUS_ROLE) {
        profileOf[_dinoId].health += _delta;
    }
}
