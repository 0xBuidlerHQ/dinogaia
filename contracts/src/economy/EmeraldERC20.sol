// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EmeraldERC20 is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor() ERC20("Emerald", "EMRLD") {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to the deployer.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

        /**
         * @dev Grant `MINTER_ROLE` to the deployer.
         */
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }
}
