// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ItemsSet} from "@items/sets/ItemsSet.sol";
import {Dino} from "@dino/Dino.sol";
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
        ItemsSet _itemsSet,
        uint256 _itemId,
        //
        int32 _amount
    )
        external
    {
        if (_amount <= 0) revert NoEffect();

        DinoFactory.DinoContext memory dinoContext = getAuthorizedDino(_dinoId);

        ItemsSet.Item memory item = _itemsSet.getItem(_itemId);
        if (item.itemType != ItemsSet.ItemType.Consumable) revert NoEffect();

        _itemsSet.burn(address(dinoContext.dinoAccount), _itemId, 1);

        _applyConsumableEffects(dinoContext.dinoId, item.effects, _amount);
    }

    /**
     * @dev
     */
    function _applyConsumableEffects(uint256 _dinoId, ItemsSet.Effect[] memory effects, int32 _amount) internal {
        for (uint256 i = 0; i < effects.length; i++) {
            ItemsSet.Effect memory effect = effects[i];

            /**
             * @dev EffectKind Weight.
             */
            if (effect.kind == ItemsSet.EffectKind.Weight) {
                dino.updateWeight(_dinoId, effect.magnitude * _amount);
                break;
            }

            /**
             * @dev EffectKind Health.
             */
            if (effect.kind == ItemsSet.EffectKind.Health) {
                dino.updateHealth(_dinoId, effect.magnitude * _amount);
                break;
            }

            /**
             * @dev EffectKind ClearHunger.
             */
            if (effect.kind == ItemsSet.EffectKind.ClearHunger) {
                dino.updateHunger(_dinoId, false);
            }

            /**
             * @dev EffectKind ClearThirst.
             */
            if (effect.kind == ItemsSet.EffectKind.ClearThirst) {
                dino.updateThirst(_dinoId, false);
                break;
            }
        }
    }

    /**
     * @dev
     */
    function _checkConsumableType(ItemsSet.Item memory meta) internal pure {
        if (meta.itemType != ItemsSet.ItemType.Consumable) revert InvalidItemType();
    }
}
