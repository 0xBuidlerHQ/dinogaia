// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

/**
 * @title Dino.
 */
contract Dino is AccessControl {
    /**
     * @dev Constants.
     */
    bytes32 public constant FACTORY_ROLE = keccak256("FACTORY_ROLE");

    /**
     * @dev Struct GenesisParams.
     */
    struct s_GenesisParams {
        string name;
        uint256 speciesId;
    }

    /**
     * @dev Struct Genesis.
     */
    struct s_Genesis {
        bool _initialized;
        //
        string name;
        uint256 speciesId;
        uint256 birthTimestamp;
    }

    /**
     * @dev Struct Dino.
     */
    struct s_Dino {
        bool alive;
        //
        uint256 health;
        //
        bool hunger;
        bool thirst;
        //
        uint256 weight;
        //
        uint256 level;
        uint256 xp;
        //
        SpeciesRegistry.Stats stats;
    }

    /**
     * @dev Mappings.
     */
    mapping(uint256 => s_Dino) public dinos;

    /**
     * @dev Constructor.
     */
    constructor(address _owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function getDino(uint256 _dinoId) external view returns (s_Dino memory dino) {
        dino = dinos[_dinoId];
    }

    /**
     * @dev
     */
    function initialize(uint256 _dinoId, GenesisParams calldata _dino) external onlyRole(FACTORY_ROLE) {
        if (dinos[_dinoId]._initialized) revert GenesisAlreadyInitialized();

        _setName(_dinoId, _genesisParams.name);
        _setSpeciesId(_dinoId, _genesisParams.speciesId);
        _setBirth(_dinoId, block.timestamp);

        genesisOf[_dinoId]._initialized = true;

        emit InitializedGenesis({dinoId: _dinoId, genesis: genesisOf[_dinoId]});
    }
}
