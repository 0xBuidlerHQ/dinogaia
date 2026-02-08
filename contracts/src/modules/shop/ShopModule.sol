// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";
import {ModuleBase} from "@modules/ModuleBase.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";
import {EmeraldERC20} from "@economy/tokens/EmeraldERC20.sol";

contract ShopModule is ModuleBase {
    /**
     * @dev Immutables.
     */
    EmeraldERC20 public immutable emerald;
    ItemsSetBase public immutable items;

    /**
     * @dev Variables.
     */
    address public treasury;

    /**
     * @dev Events.
     */
    event TreasuryUpdated(address indexed treasury);
    event ItemPurchased(address indexed buyer, uint256 indexed itemId, uint256 amount, uint256 totalCost);

    /**
     * @dev Errors.
     */
    error InvalidAmount();

    /**
     * @dev Constructor.
     */
    constructor(address owner, EmeraldERC20 _emerald, DinoFactory _dinoFactory, ItemsSetBase _items, address _treasury)
        ModuleBase(owner, _dinoFactory)
    {
        emerald = _emerald;
        items = _items;
        treasury = _treasury;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function buy(uint256 _dinoId, uint256 _itemId, uint256 _amount) external onlyDinoAccount(_dinoId) {
        if (_amount == 0) revert InvalidAmount();

        ItemsSetBase.ItemBase memory meta = items.getItem(_itemId);
        uint256 total = meta.trading.price * _amount;

        require(emerald.transferFrom(msg.sender, treasury, total), "PAY_FAIL");

        items.mint(msg.sender, _itemId, _amount);

        emit ItemPurchased(msg.sender, _itemId, _amount, total);
    }

    /**
     * @dev
     */
    function getItems() external view returns (ItemsSetBase.ItemBase[] memory) {
        return items.getItems();
    }
}
