// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";
import {DinoProfile} from "@dino/DinoProfile.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";
import {ModuleBase} from "@modules/ModuleBase.sol";

/**
 * @dev
 */
contract ActionModule is ModuleBase {
    /**
     * @dev Immutables.
     */
    DinoProfile public immutable dinoProfile;

    /**
     * @dev Mappings.
     */

    /**
     * @dev Events.
     */
    event FoodConsumed(uint256 indexed dinoId, uint256 indexed itemId, uint256 amount);

    /**
     * @dev Errors.
     */
    error ZeroAddress();
    error ItemSetNotAllowed();
    error NoEffect();

    /**
     * @dev Constructor.
     */
    constructor(address _owner, DinoFactory _dinoFactory, DinoProfile _dinoProfile) ModuleBase(_owner, _dinoFactory) {
        dinoProfile = _dinoProfile;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function consume(uint256 dinoId, address itemSet, uint256 itemId, uint256 amount) external onlyDinoAccount(dinoId) {
        if (amount == 0) revert NoEffect();

        ItemsSetBase set = ItemsSetBase(itemSet);
        ItemsSetBase.ItemBase memory meta = set.getItem(itemId);

        if (meta.effects.length == 0) revert NoEffect();

        set.burn(msg.sender, itemId, amount);

        for (uint256 i = 0; i < meta.effects.length; i++) {
            ItemsSetBase.Effect memory eff = meta.effects[i];
            if (eff.kind == ItemsSetBase.EffectKind.Weight && eff.magnitude > 0) {
                dinoProfile.addWeight(dinoId, uint256(eff.magnitude) * amount);
            } else if (eff.kind == ItemsSetBase.EffectKind.Health) {
                if (eff.magnitude > 0) {
                    dinoProfile.addHealth(dinoId, uint256(eff.magnitude) * amount);
                } else {
                    revert NoEffect();
                }
            } else if (eff.kind == ItemsSetBase.EffectKind.ClearHunger) {
                dinoProfile.setHungry(dinoId, false);
            } else if (eff.kind == ItemsSetBase.EffectKind.ClearThirst) {
                dinoProfile.setThirsty(dinoId, false);
            } else {
                revert NoEffect();
            }
        }

        emit FoodConsumed(dinoId, itemId, amount);
    }
}
