// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DinoERC721 is ERC721, AccessControl {
    uint256 public totalSupply;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor() ERC721("Dino", "DINO") {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to the `deployer`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

        /**
         * @dev Grant `MINTER_ROLE` to the deployer.
         */
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function mint(
        address to
    ) external onlyRole(MINTER_ROLE) returns (uint256 tokenId) {
        tokenId = ++totalSupply;
        _safeMint(to, tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
