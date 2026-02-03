// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";

/**
 * @dev
 */
contract ItemsSet0 is ItemsSetBase {
    /**
     * @dev Constructor.
     */
    constructor(address _owner) ItemsSetBase(_owner) {
        _initConsumables();
        _initHabitatItems();
        _initWeaponItems();
        _initEquipmentItems();
        _initQuestItems();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev Consumables.
     */
    function _initConsumables() internal {
        /**
         * @dev Food items.
         */

        {

            Effect[] memory foodEffects = new Effect[](2);
            foodEffects[0] = Effect({kind: EffectKind.ClearHunger, magnitude: 0});
            foodEffects[1] = Effect({kind: EffectKind.Weight, magnitude: 50});

            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 1}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "apple", symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 120;
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 2}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "bread", symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 180;
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 3}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "cheese", symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 350;
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 5}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "chicken", symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 420;
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 7}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "salmon", symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 600;
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "tuna", symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );
        }

        /**
         * @dev Medicine items.
         */
        {

            Effect[] memory healEffects = new Effect[](1);
            healEffects[0] = Effect({kind: EffectKind.Health, magnitude: 20});

            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 3}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "small bandage", symbol: "", decimals: 0}),
                    effects: healEffects
                })
            );

            healEffects[0].magnitude = 40;

            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 5}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "healing herb", symbol: "", decimals: 0}),
                    effects: healEffects
                })
            );

            healEffects[0].magnitude = 80;
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 10}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "first aid kit", symbol: "", decimals: 0}),
                    effects: healEffects
                })
            );
        }
    }

    /**
     * @dev Habitats.
     */
    function _initHabitatItems() internal {
        /**
         * @dev
         */
        {
            Effect[] memory eff = new Effect[](1);

            eff[0] = Effect({kind: EffectKind.SecurityBonus, magnitude: 20});
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Habitat,
                    trading: ItemTrading({tradable: true, sellable: true, price: 5}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "wooden door", symbol: "", decimals: 0}),
                    effects: eff
                })
            );

            eff[0] = Effect({kind: EffectKind.SecurityBonus, magnitude: 60});
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Uncommon,
                    itemType: ItemBaseType.Habitat,
                    trading: ItemTrading({tradable: true, sellable: true, price: 15}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "alarm system", symbol: "", decimals: 0}),
                    effects: eff
                })
            );

            eff[0] = Effect({kind: EffectKind.HygieneBonus, magnitude: 40});
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Habitat,
                    trading: ItemTrading({tradable: true, sellable: true, price: 8}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "air purifier", symbol: "", decimals: 0}),
                    effects: eff
                })
            );

            eff[0] = Effect({kind: EffectKind.ComfortBonus, magnitude: 50});
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Uncommon,
                    itemType: ItemBaseType.Habitat,
                    trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "cozy bed", symbol: "", decimals: 0}),
                    effects: eff
                })
            );

            eff = new Effect[](3);
            eff[0] = Effect({kind: EffectKind.SecurityBonus, magnitude: 100});
            eff[1] = Effect({kind: EffectKind.HygieneBonus, magnitude: 100});
            eff[2] = Effect({kind: EffectKind.ComfortBonus, magnitude: 100});
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Mythic,
                    itemType: ItemBaseType.Habitat,
                    trading: ItemTrading({tradable: false, sellable: false, price: 0}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: true}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "security artifact", symbol: "", decimals: 0}),
                    effects: eff
                })
            );
        }
    }

    /**
     * @dev Weapons items.
     */
    function _initWeaponItems() internal {
        /**
         * @dev
         */
        {
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Weapon,
                    trading: ItemTrading({tradable: true, sellable: true, price: 8}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "wooden spear", symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Weapon,
                    trading: ItemTrading({tradable: true, sellable: true, price: 15}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "bronze sword", symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Weapon,
                    trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "longbow", symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );
        }
    }

    /**
     * @dev Equipment items.
     */
    function _initEquipmentItems() internal {
        /**
         * @dev
         */
        {
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Equipment,
                    trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "leather armor", symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Equipment,
                    trading: ItemTrading({tradable: true, sellable: true, price: 9}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "iron helmet", symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Equipment,
                    trading: ItemTrading({tradable: true, sellable: true, price: 7}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "travel boots", symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );
        }
    }

    /**
     * @dev Quest items.
     */
    function _initQuestItems() internal {
        /**
         * @dev
         */
        {
            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Quest,
                    trading: ItemTrading({tradable: false, sellable: false, price: 0}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "ancient map", symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _defineItem(
                ItemBase({
                    rarity: ItemBaseRarity.Common,
                    itemType: ItemBaseType.Quest,
                    trading: ItemTrading({tradable: false, sellable: false, price: 0}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemBaseMetadata({name: "royal seal", symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );
        }
    }
}
