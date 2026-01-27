// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {SpeciesRegistry, DinoSpecies} from "@registry/SpeciesRegistry.sol";

/**
 * @title DinoProfile
 */
contract DinoGenesis is AccessControl {
    struct Genesis {
        string name;
        uint256 species;
    }

    SpeciesRegistry public immutable speciesRegistry;

    mapping(uint256 => Genesis) public genesisOf;

    error InvalidSpeciesId();
    error NotDinoAccount();
    error SpeciesAlreadySet();

    event GenesisSet(uint256 indexed tokenId, Genesis indexed genesis);

    constructor(address owner, SpeciesRegistry _dinoSpeciesRegistry) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        speciesRegistry = _dinoSpeciesRegistry;
    }

    function set(uint256 dinoId, Genesis calldata genesis) external onlyRole(DEFAULT_ADMIN_ROLE) {
        emit GenesisSet(dinoId, genesis);
    }

    /**
     * @dev
     */
    function _selectSpecies(uint256 tokenId, uint256 speciesId) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (!speciesRegistry.speciesExists(speciesId)) revert InvalidSpeciesId();
        if (genesisOf[tokenId].species != 0) revert SpeciesAlreadySet();

        genesisOf[tokenId].species = speciesId;
    }

    /**
     * @dev
     */
    function _setName(uint256 tokenId, string calldata name) external onlyRole(DEFAULT_ADMIN_ROLE) {
        genesisOf[tokenId].name = name;
    }
}
