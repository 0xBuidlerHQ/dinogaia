// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";
import {DinoProfile} from "@dino/DinoProfile.sol";
import {ModuleBase} from "@modules/ModuleBase.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";
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
        uint256 _amount
    )
        external
    {
        if (_amount == 0) revert NoEffect();

        DinoFactory.Dino memory dino = getAuthorizedDino(_dinoId);
        ItemsSetBase.ItemBase memory item = _itemsSet.getItem(_itemId);

        _itemsSet.burn(address(dino.dinoAccount), _itemId, _amount);

        for (uint256 i = 0; i < item.effects.length; i++) {
            ItemsSetBase.Effect memory effect = item.effects[i];

            /**
             * @dev EffectKind Weight.
             */
            if (effect.kind == ItemsSetBase.EffectKind.Weight) {
                dinoProfile.addWeight(dino.dinoId, uint256(effect.magnitude) * _amount);
                break;
            }

            /**
             * @dev EffectKind Health.
             */
            if (effect.kind == ItemsSetBase.EffectKind.Health) {
                dinoProfile.addHealth(dino.dinoId, uint256(effect.magnitude) * _amount);
                break;
            }

            /**
             * @dev EffectKind ClearHunger.
             */
            if (effect.kind == ItemsSetBase.EffectKind.ClearHunger) {
                dinoProfile.setHunger(dino.dinoId, false);
            }

            /**
             * @dev EffectKind ClearThirst.
             */
            if (effect.kind == ItemsSetBase.EffectKind.ClearThirst) {
                dinoProfile.setThirsty(dino.dinoId, false);
                break;
            }
        }
    }
}
