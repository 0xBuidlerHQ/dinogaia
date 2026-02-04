// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";
import {ModuleBase} from "@modules/ModuleBase.sol";
import {CaveBase} from "@modules/cave/CaveBase.sol";
import {CaveStateModule} from "@modules/cave/CaveStateModule.sol";

/**
 * @dev
 */
abstract contract CaveHabitatModule is ModuleBase, CaveBase, CaveStateModule {
    /**
     * @dev Errors.
     */
    error AlreadyEquipped();
    error NotEquipped();
    error InvalidItemType();

    /**
     * @dev
     */
    function useHabitat(uint256 _dinoId, uint256 _itemId, bool installing) external onlyDinoAccount(_dinoId) {
        ItemsSetBase.ItemBase memory item = items.getItem(_itemId);
        _checkHabitatType(item);

        if (installing) {
            if (isEquipped[_dinoId][_itemId]) revert AlreadyEquipped();
            isEquipped[_dinoId][_itemId] = true;
        } else {
            if (!isEquipped[_dinoId][_itemId]) revert NotEquipped();
            isEquipped[_dinoId][_itemId] = false;
        }

        _applyHabitatEffects(_dinoId, item.effects, installing);
    }

    /**
     * @dev
     */
    function _applyHabitatEffects(uint256 _dinoId, ItemsSetBase.Effect[] memory effects, bool installing) internal {
        int256 sign = installing ? int256(1) : int256(-1);

        for (uint256 i = 0; i < effects.length; i++) {
            ItemsSetBase.Effect memory eff = effects[i];

            if (eff.kind == ItemsSetBase.EffectKind.SecurityBonus) {
                updateSecurity(_dinoId, sign * eff.magnitude);
            } else if (eff.kind == ItemsSetBase.EffectKind.HygieneBonus) {
                updateHygiene(_dinoId, sign * eff.magnitude);
            } else if (eff.kind == ItemsSetBase.EffectKind.ComfortBonus) {
                updateComfort(_dinoId, sign * eff.magnitude);
            }
        }
    }

    /**
     * @dev
     */
    function _checkHabitatType(ItemsSetBase.ItemBase memory meta) internal pure {
        if (meta.itemType != ItemsSetBase.ItemBaseType.Habitat) revert InvalidItemType();
    }
}
