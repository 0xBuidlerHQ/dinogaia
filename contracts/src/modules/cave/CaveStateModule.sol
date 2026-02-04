// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @dev
 */
abstract contract CaveStateModule is AccessControl {
    /**
     * @dev Constants.
     */
    bytes32 public constant FACTORY_ROLE = keccak256("FACTORY_ROLE");

    /**
     * @dev Constants.
     */
    uint256 internal constant MAX_CLEANLINESS = 100;
    uint256 internal constant MAX_SCORE = 100;

    /**
     * @dev Struct Cave.
     */
    struct Cave {
        uint256 cleanliness;
        uint256 security;
        uint256 hygiene;
        uint256 comfort;
    }

    /**
     * @dev Mappings.
     */
    mapping(uint256 => Cave) internal caveOf;
    mapping(uint256 dinoId => mapping(uint256 itemId => bool equipped)) internal isEquipped;

    /**
     * @dev Constructor.
     */
    constructor(address _owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `_owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
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
        caveOf[_dinoId] = Cave({cleanliness: 100, security: 0, hygiene: 0, comfort: 0});
    }

    /**
     * @dev
     */
    function getCave(uint256 _dinoId) external view returns (Cave memory cave) {
        cave = caveOf[_dinoId];
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function updateSecurity(uint256 _dinoId, int256 _delta) internal {
        Cave memory cave = caveOf[_dinoId];
        caveOf[_dinoId].security = addSigned(cave.security, _delta);
    }

    /**
     * @dev
     */
    function updateHygiene(uint256 _dinoId, int256 _delta) internal {
        Cave memory cave = caveOf[_dinoId];
        caveOf[_dinoId].hygiene = addSigned(cave.hygiene, _delta);
    }

    /**
     * @dev
     */
    function updateComfort(uint256 _dinoId, int256 _delta) internal {
        Cave memory cave = caveOf[_dinoId];
        caveOf[_dinoId].comfort = addSigned(cave.comfort, _delta);
    }
}
