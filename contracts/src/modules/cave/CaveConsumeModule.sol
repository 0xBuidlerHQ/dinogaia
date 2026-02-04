// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";
import {DinoProfile} from "@dino/DinoProfile.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";
import {ModuleBase} from "@modules/ModuleBase.sol";
import {CaveBase} from "@modules/cave/CaveBase.sol";

/**
 * @dev
 */
abstract contract CaveConsumeModule is ModuleBase, CaveBase {
    /**
     * @dev Errors.
     */
    error NoEffect();
    error InvalidItemType();

    /**
     * @dev
     */
    function useConsumable(
        uint256 _dinoId,
        //
        ItemsSetBase _itemsSet,
        uint256 _itemId,
        //
        int256 _amount
    )
        external
    {
        if (_amount <= 0) revert NoEffect();

        DinoFactory.Dino memory dino = getAuthorizedDino(_dinoId);

        ItemsSetBase.ItemBase memory item = _itemsSet.getItem(_itemId);
        if (item.itemType != ItemsSetBase.ItemBaseType.Consumable) revert NoEffect();

        _itemsSet.burn(address(dino.dinoAccount), _itemId, 1);

        _applyConsumableEffects(dino.dinoId, item.effects, _amount);
    }

    /**
     * @dev
     */
    function _applyConsumableEffects(uint256 _dinoId, ItemsSetBase.Effect[] memory effects, int256 _amount) internal {
        for (uint256 i = 0; i < effects.length; i++) {
            ItemsSetBase.Effect memory effect = effects[i];

            /**
             * @dev EffectKind Weight.
             */
            if (effect.kind == ItemsSetBase.EffectKind.Weight) {
                dinoProfile.updateWeight(_dinoId, effect.magnitude * _amount);
                break;
            }

            /**
             * @dev EffectKind Health.
             */
            if (effect.kind == ItemsSetBase.EffectKind.Health) {
                dinoProfile.updateHealth(_dinoId, effect.magnitude * _amount);
                break;
            }

            /**
             * @dev EffectKind ClearHunger.
             */
            if (effect.kind == ItemsSetBase.EffectKind.ClearHunger) {
                dinoProfile.updateHunger(_dinoId, false);
            }

            /**
             * @dev EffectKind ClearThirst.
             */
            if (effect.kind == ItemsSetBase.EffectKind.ClearThirst) {
                dinoProfile.updateThirst(_dinoId, false);
                break;
            }
        }
    }

    /**
     * @dev
     */
    function _checkConsumableType(ItemsSetBase.ItemBase memory meta) internal pure {
        if (meta.itemType != ItemsSetBase.ItemBaseType.Consumable) revert InvalidItemType();
    }
}
