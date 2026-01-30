// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

/**
 * @title DinoGenesis.
 */
contract DinoGenesis is AccessControl {
    /**
     * @dev Struct GenesisParams.
     */
    struct GenesisParams {
        string name;
        //
        uint256 speciesId;
    }

    /**
     * @dev Struct Genesis.
     */
    struct Genesis {
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
    mapping(uint256 => Genesis) public genesisOf;

    /**
     * @dev Errors.
     */
    error InvalidSpeciesId();
    error SpeciesIdAlreadySet();
    error BirthAlreadySet();

    /**
     * @dev Events.
     */
    event InitializedGenesis(uint256 indexed dinoId, Genesis indexed genesis);

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
    function initialize(uint256 _dinoId, GenesisParams calldata _genesisParams) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _setName(_dinoId, _genesisParams.name);
        _setSpeciesId(_dinoId, _genesisParams.speciesId);
        _setBirth(_dinoId, block.timestamp);

        emit InitializedGenesis({dinoId: _dinoId, genesis: genesisOf[_dinoId]});
    }

    /**
     * @dev
     */
    function getGenesis(uint256 _dinoId) external view returns (Genesis memory genesis) {
        genesis = genesisOf[_dinoId];
    }

    /**
     * @dev
     */
    function _setSpeciesId(uint256 _tokenId, uint256 _speciesId) internal onlyRole(DEFAULT_ADMIN_ROLE) {
        if (!speciesRegistry.speciesExists(_speciesId)) revert InvalidSpeciesId();
        if (genesisOf[_tokenId].speciesId != 0) revert SpeciesIdAlreadySet();

        genesisOf[_tokenId].speciesId = _speciesId;
    }

    /**
     * @dev
     */
    function _setName(uint256 _tokenId, string calldata _name) internal onlyRole(DEFAULT_ADMIN_ROLE) {
        genesisOf[_tokenId].name = _name;
    }

    /**
     * @dev
     */
    function _setBirth(uint256 _id, uint256 _birthTimestamp) internal onlyRole(DEFAULT_ADMIN_ROLE) {
        if (genesisOf[_id].birthTimestamp != 0) revert BirthAlreadySet();
        genesisOf[_id].birthTimestamp = _birthTimestamp;
    }
}
