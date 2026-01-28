// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

/**
 * @title DinoGenesis.
 */
contract DinoGenesis is AccessControl {
    /**
     * @dev Struct GenesisData.
     */
    struct GenesisData {
        string name;
        //
        uint256 species;
    }

    /**
     * @dev Immutables.
     */
    SpeciesRegistry public immutable speciesRegistry;

    /**
     * @dev Mappings.
     */
    mapping(uint256 => GenesisData) public genesisOf;

    /**
     * @dev Errors.
     */
    error InvalidSpeciesId();
    error SpeciesAlreadySet();

    /**
     * @dev Events.
     */
    event GenesisDataSet(uint256 indexed tokenId, GenesisData indexed genesis);

    /**
     * @dev Constructor.
     */
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
    function setGenesisData(uint256 _dinoId, GenesisData calldata _genesisData) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _setName(_dinoId, _genesisData.name);
        _setSpecies(_dinoId, _genesisData.species);

        emit GenesisDataSet(_dinoId, _genesisData);
    }

    /**
     * @dev
     */
    function getGenesisData(uint256 _dinoId) external view returns (GenesisData memory genesisData) {
        genesisData = genesisOf[_dinoId];
    }

    /**
     * @dev
     */
    function _setSpecies(uint256 _tokenId, uint256 _speciesId) internal onlyRole(DEFAULT_ADMIN_ROLE) {
        if (!speciesRegistry.speciesExists(_speciesId)) revert InvalidSpeciesId();
        if (genesisOf[_tokenId].species != 0) revert SpeciesAlreadySet();

        genesisOf[_tokenId].species = _speciesId;
    }

    /**
     * @dev
     */
    function _setName(uint256 _tokenId, string calldata _name) internal onlyRole(DEFAULT_ADMIN_ROLE) {
        genesisOf[_tokenId].name = _name;
    }
}
