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
        bool hunger;
        bool thirst;
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

        /**
         * @dev Grant `STATUS_ROLE` to `_owner`.
         */
        _grantRole(STATUS_ROLE, _owner);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev TODO.
     */
    function addSigned(uint256 a, int256 b) internal pure returns (uint256) {
        if (b >= 0) {
            return a + uint256(b);
        } else {
            uint256 absB = uint256(-b);
            require(a >= absB, "uint underflow");
            return a - absB;
        }
    }

    /**
     * @dev
     */
    function initialize(uint256 _dinoId) external onlyRole(FACTORY_ROLE) {
        profileOf[_dinoId] = Profile({
            //
            alive: true,
            health: 100,
            hunger: true,
            weight: 1,
            thirst: true,
            level: 1,
            xp: 0
        });

        emit InitializedProfile({dinoId: _dinoId});
    }

    /**
     * @dev
     */
    function getProfile(uint256 _dinoId) external view returns (Profile memory profile) {
        profile = profileOf[_dinoId];
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function updateWeight(uint256 _dinoId, int256 _delta) external onlyRole(STATUS_ROLE) {
        Profile memory profile = profileOf[_dinoId];
        profileOf[_dinoId].weight = addSigned(profile.weight, _delta);
    }

    /**
     * @dev
     */
    function updateHealth(uint256 _dinoId, int256 _delta) external onlyRole(STATUS_ROLE) {
        Profile memory profile = profileOf[_dinoId];
        profileOf[_dinoId].health = addSigned(profile.health, _delta);
    }

    /**
     * @dev
     */
    function updateHunger(uint256 _dinoId, bool _hunger) external onlyRole(STATUS_ROLE) {
        profileOf[_dinoId].hunger = _hunger;
    }

    /**
     * @dev
     */
    function updateThirst(uint256 _dinoId, bool _thirst) external onlyRole(STATUS_ROLE) {
        profileOf[_dinoId].thirst = _thirst;
    }
}
