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
    bytes32 public constant STATUS_ROLE = keccak256("STATUS_ROLE");

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
        uint256 health;
        //
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
     * @dev Immutables.
     */
    SpeciesRegistry immutable speciesRegistry;

    /**
     * @dev Constructor.
     */
    constructor(address _owner, SpeciesRegistry _speciesRegistry) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);

        speciesRegistry = _speciesRegistry;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function getDino(uint256 _dinoId) external view returns (DinoData memory dino) {
        dino = dinos[_dinoId];

        SpeciesRegistry.Species memory species = speciesRegistry.getSpecies(dino.genesis.speciesId);

        dino.stats.agility = dino.stats.agility += species.stats.agility;
        dino.stats.endurance = dino.stats.endurance += species.stats.endurance;
        dino.stats.force = dino.stats.force += species.stats.force;
        dino.stats.intelligence = dino.stats.intelligence += species.stats.intelligence;
    }

    /**
     * @dev
     */
    function initialize(uint256 _dinoId, Params calldata _params) external onlyRole(FACTORY_ROLE) {
        DinoData storage dino = dinos[_dinoId];

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
            health: 100,
            force: 0,
            endurance: 0,
            agility: 0,
            intelligence: 0
        });

        emit DinoInitialized({dinoId: _dinoId, dino: dino});
    }

    /**
     * @dev TODO.
     */
    function addSigned(uint256 a, int256 b) internal pure returns (uint256) {
        if (b >= 0) {
            return a + uint256(b);
        } else {
            uint256 absB = uint256(-b);
            require(a >= absB, "uint underflow");
            return a - absB;
        }
    }

    /**
     * @dev
     */
    function updateWeight(uint256 _dinoId, int256 _delta) external onlyRole(STATUS_ROLE) {
        DinoData storage dinoData = dinos[_dinoId];
        dinoData.progress.weight = addSigned(dinoData.progress.weight, _delta);
    }

    /**
     * @dev
     */
    function updateHealth(uint256 _dinoId, int256 _delta) external onlyRole(STATUS_ROLE) {
        DinoData storage dinoData = dinos[_dinoId];
        dinoData.stats.health = addSigned(dinoData.stats.health, _delta);
    }

    /**
     * @dev
     */
    function updateHunger(uint256 _dinoId, bool _hunger) external onlyRole(STATUS_ROLE) {
        DinoData storage dinoData = dinos[_dinoId];
        dinoData.status.hunger = _hunger;
    }

    /**
     * @dev
     */
    function updateThirst(uint256 _dinoId, bool _thirst) external onlyRole(STATUS_ROLE) {
        DinoData storage dinoData = dinos[_dinoId];
        dinoData.status.thirst = _thirst;
    }
}
