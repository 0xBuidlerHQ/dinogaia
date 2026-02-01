// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";

contract ItemsSet0 is ItemsSetBase {
    struct FoodSpec {
        uint256 weight;
    }

    struct HealSpec {
        uint256 healAmount;
    }

    struct WeaponSpec {
        uint256 damage;
        uint256 durability;
    }

    struct EquipmentSpec {
        string slot;
        uint256 defense;
        uint256 durability;
    }

    struct QuestSpec {
        string description;
    }

    mapping(uint256 id => FoodSpec spec) private _foodSpecs;
    mapping(uint256 id => HealSpec spec) private _healSpecs;
    mapping(uint256 id => WeaponSpec spec) private _weaponSpecs;
    mapping(uint256 id => EquipmentSpec spec) private _equipmentSpecs;
    mapping(uint256 id => QuestSpec spec) private _questSpecs;

    constructor(address _owner) ItemsSetBase(_owner) {
        _initItems();
    }

    function getFoodSpec(uint256 _id) external view returns (FoodSpec memory) {
        if (_id >= itemIdsIndex) revert InvalidItemId();
        return _foodSpecs[_id];
    }

    function getHealSpec(uint256 _id) external view returns (HealSpec memory) {
        if (_id >= itemIdsIndex) revert InvalidItemId();
        return _healSpecs[_id];
    }

    function getWeaponSpec(uint256 _id) external view returns (WeaponSpec memory) {
        if (_id >= itemIdsIndex) revert InvalidItemId();
        return _weaponSpecs[_id];
    }

    function getEquipmentSpec(uint256 _id) external view returns (EquipmentSpec memory) {
        if (_id >= itemIdsIndex) revert InvalidItemId();
        return _equipmentSpecs[_id];
    }

    function getQuestSpec(uint256 _id) external view returns (QuestSpec memory) {
        if (_id >= itemIdsIndex) revert InvalidItemId();
        return _questSpecs[_id];
    }

    function _defineFood(string memory _name, uint256 _price, FoodSpec memory _foodSpec, string[] memory _tags)
        internal
    {
        ItemsSetBase.ItemBase memory base = ItemsSetBase.ItemBase({
            rarity: ItemsSetBase.ItemBaseRarity.Common,
            itemType: ItemsSetBase.ItemBaseType.Consumable,
            trading: ItemsSetBase.ItemTrading({tradable: true, sellable: true, price: _price}),
            usage: ItemsSetBase.ItemUsage({destroyOnUse: true, soulbound: false}),
            requirements: ItemsSetBase.ItemRequirements({requiredLevel: 0}),
            metadata: ItemsSetBase.ItemBaseMetadata({name: _name, symbol: "", decimals: 0}),
            tagging: ItemsSetBase.ItemTags({tags: _tags})
        });

        uint256 id = _defineItem(base);
        _foodSpecs[id] = _foodSpec;
    }

    function _defineHeal(string memory _name, uint256 _price, HealSpec memory _healSpec, string[] memory _tags)
        internal
    {
        ItemsSetBase.ItemBase memory base = ItemsSetBase.ItemBase({
            rarity: ItemsSetBase.ItemBaseRarity.Common,
            itemType: ItemsSetBase.ItemBaseType.Consumable,
            trading: ItemsSetBase.ItemTrading({tradable: true, sellable: true, price: _price}),
            usage: ItemsSetBase.ItemUsage({destroyOnUse: true, soulbound: false}),
            requirements: ItemsSetBase.ItemRequirements({requiredLevel: 0}),
            metadata: ItemsSetBase.ItemBaseMetadata({name: _name, symbol: "", decimals: 0}),
            tagging: ItemsSetBase.ItemTags({tags: _tags})
        });

        uint256 id = _defineItem(base);
        _healSpecs[id] = _healSpec;
    }

    function _defineWeapon(string memory _name, uint256 _price, WeaponSpec memory _weaponSpec, string[] memory _tags)
        internal
    {
        ItemsSetBase.ItemBase memory base = ItemsSetBase.ItemBase({
            rarity: ItemsSetBase.ItemBaseRarity.Common,
            itemType: ItemsSetBase.ItemBaseType.Equipment,
            trading: ItemsSetBase.ItemTrading({tradable: true, sellable: true, price: _price}),
            usage: ItemsSetBase.ItemUsage({destroyOnUse: false, soulbound: false}),
            requirements: ItemsSetBase.ItemRequirements({requiredLevel: 0}),
            metadata: ItemsSetBase.ItemBaseMetadata({name: _name, symbol: "", decimals: 0}),
            tagging: ItemsSetBase.ItemTags({tags: _tags})
        });

        uint256 id = _defineItem(base);
        _weaponSpecs[id] = _weaponSpec;
    }

    function _defineEquipment(
        string memory _name,
        uint256 _price,
        EquipmentSpec memory _equipmentSpec,
        string[] memory _tags
    ) internal {
        ItemsSetBase.ItemBase memory base = ItemsSetBase.ItemBase({
            rarity: ItemsSetBase.ItemBaseRarity.Common,
            itemType: ItemsSetBase.ItemBaseType.Equipment,
            trading: ItemsSetBase.ItemTrading({tradable: true, sellable: true, price: _price}),
            usage: ItemsSetBase.ItemUsage({destroyOnUse: false, soulbound: false}),
            requirements: ItemsSetBase.ItemRequirements({requiredLevel: 0}),
            metadata: ItemsSetBase.ItemBaseMetadata({name: _name, symbol: "", decimals: 0}),
            tagging: ItemsSetBase.ItemTags({tags: _tags})
        });

        uint256 id = _defineItem(base);
        _equipmentSpecs[id] = _equipmentSpec;
    }

    function _defineQuestItem(string memory _name, QuestSpec memory _questSpec, string[] memory _tags) internal {
        ItemsSetBase.ItemBase memory base = ItemsSetBase.ItemBase({
            rarity: ItemsSetBase.ItemBaseRarity.Common,
            itemType: ItemsSetBase.ItemBaseType.Quest,
            trading: ItemsSetBase.ItemTrading({tradable: false, sellable: false, price: 0}),
            usage: ItemsSetBase.ItemUsage({destroyOnUse: false, soulbound: true}),
            requirements: ItemsSetBase.ItemRequirements({requiredLevel: 0}),
            metadata: ItemsSetBase.ItemBaseMetadata({name: _name, symbol: "", decimals: 0}),
            tagging: ItemsSetBase.ItemTags({tags: _tags})
        });

        uint256 id = _defineItem(base);
        _questSpecs[id] = _questSpec;
    }

    function _initItems() internal {
        string[] memory foodTag = new string[](2);
        foodTag[0] = "consumable";
        foodTag[1] = "food";

        _defineFood("apple", 1, FoodSpec({weight: 50}), foodTag);
        _defineFood("bread", 2, FoodSpec({weight: 120}), foodTag);
        _defineFood("cheese", 3, FoodSpec({weight: 180}), foodTag);
        _defineFood("chicken", 5, FoodSpec({weight: 350}), foodTag);
        _defineFood("salmon", 7, FoodSpec({weight: 420}), foodTag);
        _defineFood("tuna", 12, FoodSpec({weight: 600}), foodTag);

        string[] memory medTags = new string[](2);
        medTags[0] = "consumable";
        medTags[1] = "medicine";

        _defineHeal("small bandage", 3, HealSpec({healAmount: 20}), medTags);
        _defineHeal("healing herb", 5, HealSpec({healAmount: 40}), medTags);
        _defineHeal("first aid kit", 10, HealSpec({healAmount: 80}), medTags);

        string[] memory weaponTags = new string[](1);
        weaponTags[0] = "weapon";

        _defineWeapon("wooden spear", 8, WeaponSpec({damage: 8, durability: 50}), weaponTags);
        _defineWeapon("bronze sword", 15, WeaponSpec({damage: 14, durability: 80}), weaponTags);
        _defineWeapon("longbow", 12, WeaponSpec({damage: 12, durability: 70}), weaponTags);

        string[] memory equipTags = new string[](1);
        equipTags[0] = "equipment";

        _defineEquipment("leather armor", 12, EquipmentSpec({slot: "chest", defense: 6, durability: 80}), equipTags);
        _defineEquipment("iron helmet", 9, EquipmentSpec({slot: "head", defense: 4, durability: 60}), equipTags);
        _defineEquipment("travel boots", 7, EquipmentSpec({slot: "feet", defense: 3, durability: 50}), equipTags);

        string[] memory questTags = new string[](1);
        questTags[0] = "quest";

        _defineQuestItem("ancient map", QuestSpec({description: "Leads to hidden ruins"}), questTags);
        _defineQuestItem("royal seal", QuestSpec({description: "Proof of royal mandate"}), questTags);
    }
}
