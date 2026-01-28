// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

/**
 * @title DinoGenesis.
 */
contract DinoGenesis is AccessControl {
    /**
     * @dev Struct GenesisDataParams.
     */
    struct GenesisDataParams {
        string name;
        //
        uint256 speciesId;
    }

    /**
     * @dev Struct GenesisData.
     */
    struct GenesisData {
        string name;
        //
        uint256 speciesId;
        uint256 birthTimestamp;
    }

    /**
     * @dev Immutables.
     */
    SpeciesRegistry public immutable speciesRegistry;

    /**
     * @dev Mappings.
     */
    mapping(uint256 => GenesisData) public genesisDataOf;

    /**
     * @dev Errors.
     */
    error InvalidSpeciesId();
    error SpeciesIdAlreadySet();
    error BirthAlreadySet();

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
    function setGenesisData(uint256 _dinoId, GenesisDataParams calldata _genesisDataParams)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        _setName(_dinoId, _genesisDataParams.name);
        _setSpeciesId(_dinoId, _genesisDataParams.speciesId);
        _setBirth(_dinoId, block.timestamp);

        emit GenesisDataSet(_dinoId, genesisDataOf[_dinoId]);
    }

    /**
     * @dev
     */
    function getGenesisData(uint256 _dinoId) external view returns (GenesisData memory genesisData) {
        genesisData = genesisDataOf[_dinoId];
    }

    /**
     * @dev
     */
    function _setSpeciesId(uint256 _tokenId, uint256 _speciesId) internal onlyRole(DEFAULT_ADMIN_ROLE) {
        if (!speciesRegistry.speciesExists(_speciesId)) revert InvalidSpeciesId();
        if (genesisDataOf[_tokenId].speciesId != 0) revert SpeciesIdAlreadySet();

        genesisDataOf[_tokenId].speciesId = _speciesId;
    }

    /**
     * @dev
     */
    function _setName(uint256 _tokenId, string calldata _name) internal onlyRole(DEFAULT_ADMIN_ROLE) {
        genesisDataOf[_tokenId].name = _name;
    }

    /**
     * @dev
     */
    function _setBirth(uint256 _id, uint256 _birthTimestamp) internal onlyRole(DEFAULT_ADMIN_ROLE) {
        if (genesisDataOf[_id].birthTimestamp != 0) revert BirthAlreadySet();
        genesisDataOf[_id].birthTimestamp = _birthTimestamp;
    }
}
