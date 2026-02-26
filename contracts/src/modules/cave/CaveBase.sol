// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {EmeraldERC20} from "@economy/tokens/EmeraldERC20.sol";
import {ItemsSet} from "@items/sets/ItemsSet.sol";
import {Dino} from "@dino/Dino.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";
import {ModuleBase} from "@modules/ModuleBase.sol";

/**
 * @dev
 */
contract CaveBase is ModuleBase {
    /**
     * @dev Immutables.
     */
    EmeraldERC20 public immutable emerald;
    ItemsSet public immutable items;
    Dino public immutable dino;

    /**
     * @dev Variables.
     */
    address public treasury;

    /**
     * @dev Constructor.
     */
    constructor(
        address _owner,
        DinoFactory _dinoFactory,
        //
        EmeraldERC20 _emerald,
        ItemsSet _items,
        Dino _dino,
        address _treasury
    ) ModuleBase(_owner, _dinoFactory) {
        emerald = _emerald;
        items = _items;
        dino = _dino;
        treasury = _treasury;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
