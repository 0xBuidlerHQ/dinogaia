// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

abstract contract CaveStateModule {
    uint256 internal constant MAX_CLEANLINESS = 100;
    uint256 internal constant MAX_SCORE = 100;

    struct Cave {
        uint256 cleanliness;
        uint256 security;
        uint256 hygiene;
        uint256 comfort;
    }

    mapping(uint256 => Cave) internal caveOf;
    mapping(uint256 dinoId => mapping(uint256 itemId => bool equipped)) internal isEquipped;

    function _getCave(uint256 dinoId) internal view returns (Cave memory) {
        Cave memory cave = caveOf[dinoId];
        if (cave.cleanliness == 0 && cave.security == 0 && cave.hygiene == 0 && cave.comfort == 0) {
            cave.cleanliness = MAX_CLEANLINESS;
        }
        return cave;
    }

    function _setCave(uint256 dinoId, Cave memory cave) internal {
        caveOf[dinoId] = cave;
    }
}
