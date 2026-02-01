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
        _initFoodItems();
        _initMedecineItems();
        _initEquipmentItems();
        _initWeaponItems();
        _initQuestItems();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev Food items.
     */
    function _initFoodItems() internal {
        string[] memory foodTags = new string[](1);
        foodTags[0] = "consumable";

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
                tagging: ItemTags({tags: foodTags}),
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
                tagging: ItemTags({tags: foodTags}),
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
                tagging: ItemTags({tags: foodTags}),
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
                tagging: ItemTags({tags: foodTags}),
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
                tagging: ItemTags({tags: foodTags}),
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
                tagging: ItemTags({tags: foodTags}),
                effects: foodEffects
            })
        );
    }

    /**
     * @dev Equipment items.
     */
    function _initEquipmentItems() internal {
        string[] memory equipTags = new string[](1);
        equipTags[0] = "equipment";

        _defineItem(
            ItemBase({
                rarity: ItemBaseRarity.Common,
                itemType: ItemBaseType.Equipment,
                trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                requirements: ItemRequirements({requiredLevel: 0}),
                metadata: ItemBaseMetadata({name: "leather armor", symbol: "", decimals: 0}),
                tagging: ItemTags({tags: equipTags}),
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
                tagging: ItemTags({tags: equipTags}),
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
                tagging: ItemTags({tags: equipTags}),
                effects: new Effect[](0)
            })
        );
    }

    /**
     * @dev Medicine items.
     */
    function _initMedecineItems() internal {
        string[] memory medTags = new string[](1);
        medTags[0] = "medicine";

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
                tagging: ItemTags({tags: medTags}),
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
                tagging: ItemTags({tags: medTags}),
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
                tagging: ItemTags({tags: medTags}),
                effects: healEffects
            })
        );
    }

    /**
     * @dev
     */
    function _initQuestItems() internal {
        string[] memory questTags = new string[](1);
        questTags[0] = "quest";

        _defineItem(
            ItemBase({
                rarity: ItemBaseRarity.Common,
                itemType: ItemBaseType.Quest,
                trading: ItemTrading({tradable: false, sellable: false, price: 0}),
                usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                requirements: ItemRequirements({requiredLevel: 0}),
                metadata: ItemBaseMetadata({name: "ancient map", symbol: "", decimals: 0}),
                tagging: ItemTags({tags: questTags}),
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
                tagging: ItemTags({tags: questTags}),
                effects: new Effect[](0)
            })
        );
    }

    /**
     * @dev Weapons.
     */
    function _initWeaponItems() internal {
        string[] memory weaponTags = new string[](1);
        weaponTags[0] = "weapon";

        _defineItem(
            ItemBase({
                rarity: ItemBaseRarity.Common,
                itemType: ItemBaseType.Equipment,
                trading: ItemTrading({tradable: true, sellable: true, price: 8}),
                usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                requirements: ItemRequirements({requiredLevel: 0}),
                metadata: ItemBaseMetadata({name: "wooden spear", symbol: "", decimals: 0}),
                tagging: ItemTags({tags: weaponTags}),
                effects: new Effect[](0)
            })
        );

        _defineItem(
            ItemBase({
                rarity: ItemBaseRarity.Common,
                itemType: ItemBaseType.Equipment,
                trading: ItemTrading({tradable: true, sellable: true, price: 15}),
                usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                requirements: ItemRequirements({requiredLevel: 0}),
                metadata: ItemBaseMetadata({name: "bronze sword", symbol: "", decimals: 0}),
                tagging: ItemTags({tags: weaponTags}),
                effects: new Effect[](0)
            })
        );

        _defineItem(
            ItemBase({
                rarity: ItemBaseRarity.Common,
                itemType: ItemBaseType.Equipment,
                trading: ItemTrading({tradable: true, sellable: true, price: 12}),
                usage: ItemUsage({destroyOnUse: true, soulbound: false}),
                requirements: ItemRequirements({requiredLevel: 0}),
                metadata: ItemBaseMetadata({name: "longbow", symbol: "", decimals: 0}),
                tagging: ItemTags({tags: weaponTags}),
                effects: new Effect[](0)
            })
        );
    }
}
