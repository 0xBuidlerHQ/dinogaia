// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {EmeraldERC20} from "@economy/tokens/EmeraldERC20.sol";
import {ItemsSetBase} from "@items/sets/ItemsSetBase.sol";
import {DinoProfile} from "@dino/DinoProfile.sol";
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
    ItemsSetBase public immutable items;
    DinoProfile public immutable dinoProfile;

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
        ItemsSetBase _items,
        DinoProfile _dinoProfile,
        address _treasury
    ) ModuleBase(_owner, _dinoFactory) {
        emerald = _emerald;
        items = _items;
        dinoProfile = _dinoProfile;
        treasury = _treasury;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
