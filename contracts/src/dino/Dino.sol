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
     * @dev Struct Params.
     */
    struct Params {
        string name;
        uint256 speciesId;
    }

    /**
     * @dev Struct Genesis.
     */
    struct Genesis {
        bool _initialized;
        //
        string name;
        uint256 speciesId;
        uint256 birthTimestamp;
    }

    /**
     * @dev Struct Stats.
     */
    struct Stats {
        uint8 force;
        uint8 endurance;
        uint8 agility;
        uint8 intelligence;
    }

    /**
     * @dev Struct Status.
     */
    struct Status {
        bool alive;
        bool hunger;
        bool thirst;
    }

    /**
     * @dev Struct Progress.
     */
    struct Progress {
        uint256 xp;
        uint256 weight;
        uint256 health;
        uint256 level;
    }

    /**
     * @dev Struct Dino.
     */
    struct DinoData {
        Genesis genesis;
        //
        Progress progress;
        Status status;
        Stats stats;
    }

    /**
     * @dev Mappings.
     */
    mapping(uint256 => DinoData) public dinos;

    /**
     * @dev Events.
     */
    event DinoInitialized(uint256 indexed dinoId, DinoData indexed dino);

    /**
     * @dev Errors.
     */
    error DinoAlreadyInitialized();

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
    function getDino(uint256 _dinoId) external view returns (DinoData memory dino) {
        dino = dinos[_dinoId];
    }

    /**
     * @dev
     */
    function initialize(uint256 _dinoId, Params calldata _params) external onlyRole(FACTORY_ROLE) {
        DinoData memory dino = dinos[_dinoId];

        if (dino.genesis._initialized) revert DinoAlreadyInitialized();

        dino.genesis = Genesis({
            //
            _initialized: true,
            name: _params.name,
            speciesId: _params.speciesId,
            birthTimestamp: block.timestamp
        });

        dino.progress = Progress({
            //
            xp: 1,
            weight: 1,
            health: 100,
            level: 1
        });

        dino.status = Status({
            //
            alive: true,
            hunger: true,
            thirst: true
        });

        dino.stats = Stats({
            //
            force: 0,
            endurance: 0,
            agility: 0,
            intelligence: 0
        });

        emit DinoInitialized({dinoId: _dinoId, dino: dino});
    }
}
