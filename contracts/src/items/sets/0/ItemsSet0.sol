// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ItemsSet} from "@items/sets/ItemsSet.sol";

/**
 * @dev
 */
contract ItemsSet0 is ItemsSet {
    /**
     * @dev Constructor.
     */
    constructor(address _owner) ItemsSet(_owner) {
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

            _createItem(
                Item({
                    name: "apple",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 1}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 120;
            _createItem(
                Item({
                    name: "bread",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 2}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 180;
            _createItem(
                Item({
                    name: "cheese",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 3}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 350;
            _createItem(
                Item({
                    name: "chicken",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 5}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 420;
            _createItem(
                Item({
                    name: "salmon",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 7}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: foodEffects
                })
            );

            foodEffects[1].magnitude = 600;
            _createItem(
                Item({
                    name: "tuna", //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
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

            _createItem(
                Item({
                    name: "small bandage",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 3}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: healEffects
                })
            );

            healEffects[0].magnitude = 40;

            _createItem(
                Item({
                    name: "healing herb",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 5}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: healEffects
                })
            );

            healEffects[0].magnitude = 80;
            _createItem(
                Item({
                    name: "first aid kit",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Consumable,
                    trading: ItemTrading({tradable: true, sellable: true, price: 10}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
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
            _createItem(
                Item({
                    name: "wooden door",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Habitat,
                    trading: ItemTrading({tradable: true, sellable: true, price: 5}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: eff
                })
            );

            eff[0] = Effect({kind: EffectKind.SecurityBonus, magnitude: 60});
            _createItem(
                Item({
                    name: "alarm system",
                    //
                    rarity: ItemRarity.Uncommon,
                    itemType: ItemType.Habitat,
                    trading: ItemTrading({tradable: true, sellable: true, price: 15}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: eff
                })
            );

            eff[0] = Effect({kind: EffectKind.HygieneBonus, magnitude: 40});
            _createItem(
                Item({
                    name: "air purifier",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Habitat,
                    trading: ItemTrading({tradable: true, sellable: true, price: 8}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: eff
                })
            );

            eff[0] = Effect({kind: EffectKind.ComfortBonus, magnitude: 50});
            _createItem(
                Item({
                    name: "cozy bed",
                    //
                    rarity: ItemRarity.Uncommon,
                    itemType: ItemType.Habitat,
                    trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: eff
                })
            );

            eff = new Effect[](3);
            eff[0] = Effect({kind: EffectKind.SecurityBonus, magnitude: 100});
            eff[1] = Effect({kind: EffectKind.HygieneBonus, magnitude: 100});
            eff[2] = Effect({kind: EffectKind.ComfortBonus, magnitude: 100});
            _createItem(
                Item({
                    name: "security artifact",
                    //
                    rarity: ItemRarity.Mythic,
                    itemType: ItemType.Habitat,
                    trading: ItemTrading({tradable: false, sellable: false, price: 0}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: true}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
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
            _createItem(
                Item({
                    name: "wooden spear",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Weapon,
                    trading: ItemTrading({tradable: true, sellable: true, price: 8}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _createItem(
                Item({
                    name: "bronze sword",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Weapon,
                    trading: ItemTrading({tradable: true, sellable: true, price: 15}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _createItem(
                Item({
                    name: "longbow",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Weapon,
                    trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
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
            _createItem(
                Item({
                    name: "leather armor",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Equipment,
                    trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _createItem(
                Item({
                    name: "iron helmet",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Equipment,
                    trading: ItemTrading({tradable: true, sellable: true, price: 9}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _createItem(
                Item({
                    name: "travel boots",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Equipment,
                    trading: ItemTrading({tradable: true, sellable: true, price: 7}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
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
            _createItem(
                Item({
                    name: "ancient map",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Quest,
                    trading: ItemTrading({tradable: false, sellable: false, price: 0}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );

            _createItem(
                Item({
                    name: "royal seal",
                    //
                    rarity: ItemRarity.Common,
                    itemType: ItemType.Quest,
                    trading: ItemTrading({tradable: false, sellable: false, price: 0}),
                    usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                    requirements: ItemRequirements({requiredLevel: 0}),
                    metadata: ItemMetadata({symbol: "", decimals: 0}),
                    effects: new Effect[](0)
                })
            );
        }
    }
}
