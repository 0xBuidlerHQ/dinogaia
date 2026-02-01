// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";

/**
 * @dev Common base for modules that interact with Dino accounts.
 */
abstract contract ModuleBase is AccessControl {
    DinoFactory public immutable dinoFactory;

    error NotDinoAccount();

    constructor(address _owner, DinoFactory _dinoFactory) {
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
        dinoFactory = _dinoFactory;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    modifier onlyDinoAccount(uint256 _dinoId) {
        DinoFactory.Dino memory dino = dinoFactory.getDino(_dinoId);
        if (address(dino.dinoAccount) != msg.sender) revert NotDinoAccount();
        _;
    }
}
