// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";
import {ModuleBase} from "@modules/ModuleBase.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";
import {EmeraldERC20} from "@economy/tokens/EmeraldERC20.sol";

contract ShopModule is ModuleBase {
    EmeraldERC20 public immutable emerald;
    ItemsSetBase public immutable items;

    address public treasury;

    event TreasuryUpdated(address indexed treasury);
    event ItemPurchased(address indexed buyer, uint256 indexed itemId, uint256 amount, uint256 totalCost);

    error ZeroAddress();
    error ItemNotPriced();
    error InvalidAmount();

    constructor(address owner, EmeraldERC20 _emerald, DinoFactory _dinoFactory, ItemsSetBase _items, address _treasury)
        ModuleBase(owner, _dinoFactory)
    {
        emerald = _emerald;
        items = _items;
        treasury = _treasury;
    }

    function buy(uint256 _dinoId, uint256 itemId, uint256 amount) external onlyDinoAccount(_dinoId) {
        if (amount == 0) revert InvalidAmount();
        ItemsSetBase.ItemBase memory meta = items.getItem(itemId);
        uint256 unit = meta.trading.price;
        if (unit == 0) revert ItemNotPriced();
        uint256 total = unit * amount;

        require(emerald.transferFrom(msg.sender, treasury, total), "PAY_FAIL");
        items.mint(msg.sender, itemId, amount);

        emit ItemPurchased(msg.sender, itemId, amount, total);
    }
}
