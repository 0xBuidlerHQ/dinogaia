// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

/**
 * @title DinoGenesis.
 */
contract DinoGenesis is AccessControl {
    /**
     * @dev Constants.
     */
    bytes32 public constant FACTORY_ROLE = keccak256("FACTORY_ROLE");

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
        bool _initialized;
        //
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
    error GenesisAlreadyInitialized();

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
    function getGenesis(uint256 _dinoId) external view returns (Genesis memory genesis) {
        genesis = genesisOf[_dinoId];
    }

    /**
     * @dev
     */
    function initialize(uint256 _dinoId, GenesisParams calldata _genesisParams) external onlyRole(FACTORY_ROLE) {
        if (genesisOf[_dinoId]._initialized) revert GenesisAlreadyInitialized();

        _setName(_dinoId, _genesisParams.name);
        _setSpeciesId(_dinoId, _genesisParams.speciesId);
        _setBirth(_dinoId, block.timestamp);

        genesisOf[_dinoId]._initialized = true;

        emit InitializedGenesis({dinoId: _dinoId, genesis: genesisOf[_dinoId]});
    }

    /**
     * @dev
     */
    function _setSpeciesId(uint256 _tokenId, uint256 _speciesId) internal {
        genesisOf[_tokenId].speciesId = _speciesId;
    }

    /**
     * @dev
     */
    function _setName(uint256 _tokenId, string calldata _name) internal {
        genesisOf[_tokenId].name = _name;
    }

    /**
     * @dev
     */
    function _setBirth(uint256 _id, uint256 _birthTimestamp) internal {
        genesisOf[_id].birthTimestamp = _birthTimestamp;
    }
}
