// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {EmeraldERC20} from "@economy/tokens/EmeraldERC20.sol";
import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";
import {DinoProfile} from "@dino/DinoProfile.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";
import {ModuleBase} from "@modules/ModuleBase.sol";
import {CaveConsumeModule} from "@modules/cave/CaveConsumeModule.sol";
import {CaveBase} from "@modules/cave/CaveBase.sol";

// import {CaveHabitatModule} from "@modules/cave/CaveHabitatModule.sol";
// import {CaveStateModule} from "@modules/cave/CaveStateModule.sol";

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
        ItemsSetBase _items,
        DinoProfile _dinoProfile,
        address _treasury
    ) CaveBase(_owner, _dinoFactory, _emerald, _items, _dinoProfile, _treasury) CaveConsumeModule() {}

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
