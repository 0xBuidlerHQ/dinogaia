// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract SpeciesRegistry is AccessControl {
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
     * @dev Struct Species.
     */
    struct Species {
        string name;
        Stats stats;
    }

    /**
     * @dev Variables.
     */
    uint256[] public speciesIds;
    uint256 public speciesIdsIndex = 0;

    /**
     * @dev Mappings.
     */
    mapping(uint256 => Species) public speciesRegistry;

    /**
     * @dev Errors.
     */
    error EmptyName();
    error InvalidSpeciesId();
    error InvalidSpecies();

    /**
     * @dev Events.
     */
    event SpeciesCreated(uint256 indexed speciesId, Species species);
    event SpeciesUpdated(uint256 indexed speciesId, Species species);

    /**
     * @dev Constructor.
     */
    constructor(address owner) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        _initSpeciesRegistry();
    }

    /**
     * @dev
     */
    function createSpecies(Species memory _species) public onlyRole(DEFAULT_ADMIN_ROLE) returns (uint256 speciesId) {
        speciesId = _createSpecies(_species);
    }

    /**
     * @dev
     */
    function updateSpecies(uint256 _speciesId, Species memory _species) public onlyRole(DEFAULT_ADMIN_ROLE) {
        if (_speciesId >= speciesIdsIndex) revert InvalidSpeciesId();
        if (bytes(_species.name).length == 0) revert EmptyName();

        speciesRegistry[_speciesId] = _species;

        emit SpeciesUpdated(_speciesId, _species);
    }

    /**
     * @dev
     */
    function speciesExists(uint256 _speciesId) public view returns (bool) {
        if (_speciesId >= speciesIdsIndex) return false;
        return true;
    }

    /**
     * @dev
     */
    function getSpecies(uint256 _speciesId) public view returns (Species memory species) {
        if (!speciesExists(_speciesId)) revert InvalidSpecies();
        return speciesRegistry[_speciesId];
    }

    /**
     * @dev
     */
    function _initSpeciesRegistry() internal {
        _createSpecies(Species({name: "Trex", stats: Stats({force: 40, endurance: 30, agility: 20, intelligence: 10})}));
        _createSpecies(
            Species({name: "Velociraptor", stats: Stats({force: 15, endurance: 20, agility: 30, intelligence: 35})})
        );
        _createSpecies(
            Species({name: "Pterodactyl", stats: Stats({force: 10, endurance: 35, agility: 25, intelligence: 30})})
        );
        _createSpecies(
            Species({name: "Megalodon", stats: Stats({force: 20, endurance: 20, agility: 40, intelligence: 20})})
        );
    }

    /**
     * @dev
     */
    function _createSpecies(Species memory _species) internal returns (uint256 speciesId) {
        if (bytes(_species.name).length == 0) revert EmptyName();

        speciesId = speciesIdsIndex;
        speciesRegistry[speciesId] = _species;
        speciesIds.push(speciesId);

        emit SpeciesCreated(speciesId, _species);

        speciesIdsIndex++;
    }
}
