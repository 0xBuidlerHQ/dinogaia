// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

import {DinoRegistry, Dino} from "./DinoRegistry.sol";
import {DinoSpeciesRegistry, DinoSpecies} from "./DinoSpeciesRegistry.sol";

/**
 * @title DinoSpeciesManager
 */
contract DinoSpeciesManager is AccessControl {
    DinoRegistry public immutable dinoRegistry;
    DinoSpeciesRegistry public immutable dinoSpeciesRegistry;

    mapping(uint256 => uint256) public speciesOf;

    error InvalidSpeciesId();
    error NotDinoAccount();

    event SpeciesSelected(uint256 indexed tokenId, uint256 indexed speciesId);

    constructor(address owner, DinoRegistry _dinoRegistry, DinoSpeciesRegistry _dinoSpeciesRegistry) {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, owner);

        dinoRegistry = _dinoRegistry;
        dinoSpeciesRegistry = _dinoSpeciesRegistry;
    }

    /**
     * @dev
     */
    function selectSpecies(uint256 tokenId, uint256 speciesId) external {
        Dino memory dino = dinoRegistry.dino(tokenId);

        if (address(dino.dinoAccount) != msg.sender) revert NotDinoAccount();
        if (!dinoSpeciesRegistry.speciesExists(speciesId)) revert InvalidSpeciesId();

        speciesOf[tokenId] = speciesId;
        emit SpeciesSelected(tokenId, speciesId);
    }
}
