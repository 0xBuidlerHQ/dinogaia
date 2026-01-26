// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

struct Stats {
    uint8 force;
    uint8 endurance;
    uint8 agility;
    uint8 intelligence;
}

struct DinoSpecies {
    string name;

    Stats stats;
}

contract SpeciesRegistry is AccessControl {
    mapping(uint256 => DinoSpecies) public speciesRegistry;
    uint256[] public speciesIds;
    uint256 public nextSpeciesId = 1;

    error EmptyName();
    error InvalidSpeciesId();
    error InvalidSpecies();

    event SpeciesCreated(uint256 indexed speciesId, DinoSpecies dinoSpecies);
    event SpeciesUpdated(uint256 indexed speciesId, DinoSpecies dinoSpecies);

    constructor(address owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        _initDinoSpeciesRegistry();
    }

    function _initDinoSpeciesRegistry() internal {
        _createSpecies(
            DinoSpecies({name: "Trex", stats: Stats({force: 40, endurance: 30, agility: 20, intelligence: 10})})
        );
        _createSpecies(
            DinoSpecies({name: "Velociraptor", stats: Stats({force: 15, endurance: 20, agility: 30, intelligence: 35})})
        );
        _createSpecies(
            DinoSpecies({name: "Pterodactyl", stats: Stats({force: 10, endurance: 35, agility: 25, intelligence: 30})})
        );
        _createSpecies(
            DinoSpecies({name: "Megalodon", stats: Stats({force: 20, endurance: 20, agility: 40, intelligence: 20})})
        );
    }

    /**
     * @dev
     */
    function createSpecies(DinoSpecies memory _species)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
        returns (uint256 speciesId)
    {
        speciesId = _createSpecies(_species);
    }

    /**
     * @dev
     */
    function updateSpecies(uint256 _speciesId, DinoSpecies memory _species) public onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_speciesId >= nextSpeciesId) revert InvalidSpeciesId();
        if (bytes(_species.name).length == 0) revert EmptyName();

        speciesRegistry[_speciesId] = _species;

        emit SpeciesUpdated(_speciesId, _species);
    }

    /**
     * @dev
     */
    function speciesExists(uint256 _speciesId) public view returns (bool) {
        if (_speciesId == 0 || _speciesId >= nextSpeciesId) return false;
        return true;
    }

    /**
     * @dev
     */
    function species(uint256 _speciesId) public view returns (DinoSpecies memory dinoSpecies) {
        if (!speciesExists(_speciesId)) revert InvalidSpecies();
        return speciesRegistry[_speciesId];
    }

    /**
     * @dev
     */
    function _createSpecies(DinoSpecies memory _species) internal returns (uint256) {
        if (bytes(_species.name).length == 0) revert EmptyName();

        uint256 speciesId = nextSpeciesId;
        speciesRegistry[speciesId] = _species;
        speciesIds.push(speciesId);

        emit SpeciesCreated(speciesId, _species);

        nextSpeciesId++;
        return speciesId;
    }
}
