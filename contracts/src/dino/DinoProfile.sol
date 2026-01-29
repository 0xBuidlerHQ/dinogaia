// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {DinoFactory} from "@dino/DinoFactory.sol";
import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

/**
 * @dev
 */
contract DinoProfile is AccessControl {
    /**
     * @dev Struct Profile.
     */
    struct Profile {
        uint16 level;

        uint16 xp;
    }

    /**
     * @dev Immutable.
     */
    DinoFactory public immutable dinoFactory;
    SpeciesRegistry public immutable speciesRegistry;

    /**
     * @dev Mappings.
     */
    mapping(uint256 => Profile) public profileOf;

    /**
     * @dev Errors.
     */

    /**
     * @dev Events.
     */

    /**
     * @dev Constructor.
     */
    constructor(address owner, DinoFactory _dinoFactory, SpeciesRegistry _speciesRegistry) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        dinoFactory = _dinoFactory;
        speciesRegistry = _speciesRegistry;
    }
}
