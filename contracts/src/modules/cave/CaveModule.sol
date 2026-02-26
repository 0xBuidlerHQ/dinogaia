// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {EmeraldERC20} from "@economy/tokens/EmeraldERC20.sol";
import {ItemsSet} from "@items/sets/ItemsSet.sol";
import {Dino} from "@dino/Dino.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";
import {ModuleBase} from "@modules/ModuleBase.sol";
import {CaveConsumeModule} from "@modules/cave/CaveConsumeModule.sol";
import {CaveBase} from "@modules/cave/CaveBase.sol";

/**
 * @dev
 */
contract CaveModule is CaveBase, CaveConsumeModule {
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
    ) CaveBase(_owner, _dinoFactory, _emerald, _items, _dino, _treasury) CaveConsumeModule() {}

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
