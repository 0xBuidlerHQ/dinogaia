// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {SpeciesRegistry, DinoSpecies} from "./SpeciesRegistry.sol";

/**
 * @title SpeciesManager
 */
contract SpeciesManager is AccessControl {
    SpeciesRegistry public immutable speciesRegistry;

    mapping(uint256 => uint256) public speciesOf;

    error InvalidSpeciesId();
    error NotDinoAccount();
    error SpeciesAlreadySet();

    event SpeciesSelected(uint256 indexed tokenId, uint256 indexed speciesId);

    constructor(address owner, SpeciesRegistry _dinoSpeciesRegistry) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        speciesRegistry = _dinoSpeciesRegistry;
    }

    /**
     * @dev
     */
    function selectSpecies(uint256 tokenId, uint256 speciesId) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (!speciesRegistry.speciesExists(speciesId)) revert InvalidSpeciesId();
        if (speciesOf[tokenId] != 0) revert SpeciesAlreadySet();

        speciesOf[tokenId] = speciesId;
        emit SpeciesSelected(tokenId, speciesId);
    }
}
