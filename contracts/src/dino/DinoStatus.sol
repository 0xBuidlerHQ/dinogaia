// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {DinoFactory} from "@dino/DinoFactory.sol";
import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

/**
 * @dev
 */
contract DinoStatus is AccessControl {
    /**
     * @dev Struct Status.
     */
    struct Status {
        uint256 health;
    }

    /**
     * @dev Immutable.
     */

    /**
     * @dev Mappings.
     */
    mapping(uint256 => Status) public statusOf;

    /**
     * @dev Errors.
     */

    /**
     * @dev Events.
     */

    /**
     * @dev Constructor.
     */
    constructor(address _owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `_owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
    }
}
