// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";

abstract contract CaveHabitatModule {
    error AlreadyEquipped();
    error NotEquipped();
    error InvalidItemType();

    mapping(uint256 dinoId => mapping(uint256 itemId => bool equipped)) public isEquipped;

    /**
     * @dev Hook to install a habitat/equipment/artifact item.
     * Burns is handled by caller.
     */
    function _installHabitat(mapping(uint256 => bool) storage slot, uint256 itemId) internal {
        if (slot[itemId]) revert AlreadyEquipped();
        slot[itemId] = true;
    }

    /**
     * @dev Hook to uninstall a habitat/equipment/artifact item.
     */
    function _uninstallHabitat(mapping(uint256 => bool) storage slot, uint256 itemId) internal {
        if (!slot[itemId]) revert NotEquipped();
        slot[itemId] = false;
    }

    function _habitatDeltas(ItemsSetBase.Effect[] memory effects)
        internal
        pure
        returns (uint256 security, uint256 hygiene, uint256 comfort)
    {
        for (uint256 i = 0; i < effects.length; i++) {
            ItemsSetBase.Effect memory eff = effects[i];
            if (eff.magnitude <= 0) continue;

            if (eff.kind == ItemsSetBase.EffectKind.SecurityBonus) {
                security += uint256(eff.magnitude);
            } else if (eff.kind == ItemsSetBase.EffectKind.HygieneBonus) {
                hygiene += uint256(eff.magnitude);
            } else if (eff.kind == ItemsSetBase.EffectKind.ComfortBonus) {
                comfort += uint256(eff.magnitude);
            }
        }
    }

    function _checkHabitatType(ItemsSetBase.ItemBase memory meta) internal pure {
        bool allowedType = meta.itemType == ItemsSetBase.ItemBaseType.Equipment
            || meta.itemType == ItemsSetBase.ItemBaseType.Artifact || meta.itemType == ItemsSetBase.ItemBaseType.Habitat;
        if (!allowedType) revert InvalidItemType();
    }
}
