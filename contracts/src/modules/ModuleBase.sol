// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {DinoFactory} from "@dino/DinoFactory.sol";

/**
 * @dev
 */
abstract contract ModuleBase is AccessControl {
    /**
     * @dev Immutables
     */
    DinoFactory public immutable dinoFactory;

    /**
     * @dev Errors.
     */
    error NotDinoAccount();

    /**
     * @dev Constructor.
     */
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
        getAuthorizedDino(_dinoId);

        _;
    }

    /**
     * @dev
     */
    function getAuthorizedDino(uint256 _dinoId) internal view returns (DinoFactory.Dino memory dino) {
        dino = dinoFactory.getDino(_dinoId);
        if (address(dino.dinoAccount) != msg.sender) revert NotDinoAccount();
    }
}
