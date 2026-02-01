// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC6909} from "@openzeppelin/contracts/token/ERC6909/ERC6909.sol";
import {ERC6909Metadata} from "@openzeppelin/contracts/token/ERC6909/extensions/ERC6909Metadata.sol";
import {ERC6909TokenSupply} from "@openzeppelin/contracts/token/ERC6909/extensions/ERC6909TokenSupply.sol";
import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";

abstract contract ItemsSetBase is ERC6909Metadata, ERC6909TokenSupply, AccessControl {
    /**
     * @dev
     */
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    enum ItemBaseRarity {
        Common,
        Uncommon,
        Rare,
        Epic,
        Legendary,
        Mythic
    }

    enum ItemBaseType {
        Consumable,
        Equipment,
        Resource,
        Quest,
        Artifact
    }

    struct ItemBaseMetadata {
        string name;
        string symbol;
        uint8 decimals;
    }

    struct ItemTrading {
        bool tradable;
        bool sellable;
        uint256 price;
    }

    struct ItemUsage {
        bool destroyOnUse;
        bool soulbound;
    }

    struct ItemRequirements {
        uint256 requiredLevel;
    }

    struct ItemTags {
        string[] tags;
    }

    struct ItemBase {
        ItemBaseRarity rarity;
        ItemBaseType itemType;
        ItemTrading trading;
        ItemUsage usage;
        ItemRequirements requirements;
        ItemBaseMetadata metadata;
        ItemTags tagging;
    }

    /**
     * @dev
     */
    uint256 public itemIdsIndex;

    /**
     * @dev
     */
    mapping(uint256 id => ItemBase itemBase) internal itemsSetBase;

    /**
     * @dev
     */
    event ItemDefined(uint256 indexed id, ItemBase meta);

    /**
     * @dev
     */
    error InvalidItemId();
    error InvalidItemType();

    /**
     * @dev
     */
    constructor(address owner) {
        _grantRole(DEFAULT_ADMIN_ROLE, owner);
        _grantRole(MINTER_ROLE, owner);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function mint(address _to, uint256 _id, uint256 _amount) external onlyRole(MINTER_ROLE) {
        _mint(_to, _id, _amount);
    }

    /**
     * @dev
     */
    function getItem(uint256 _itemId) external view returns (ItemBase memory _itemBase) {
        _itemBase = itemsSetBase[_itemId];
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function _defineItem(ItemBase memory _itemBase) internal returns (uint256 id) {
        id = itemIdsIndex++;

        _setName(id, _itemBase.metadata.name);
        _setSymbol(id, _itemBase.metadata.symbol);
        _setDecimals(id, _itemBase.metadata.decimals);

        itemsSetBase[id] = _itemBase;

        emit ItemDefined(id, _itemBase);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC6909, AccessControl, IERC165)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev
     */
    function _update(address from, address to, uint256 id, uint256 amount)
        internal
        virtual
        override(ERC6909TokenSupply, ERC6909)
    {
        super._update(from, to, id, amount);
    }
}
