// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @dev EmeraldERC20.
 */
contract EmeraldERC20 is ERC20, AccessControl {
    /**
     * @dev Constants.
     */
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /**
     * @dev Constructor.
     */
    constructor(address _owner) ERC20("Emerald", "EMRLD") {
        /**
         * @dev Grant `DEFAULT_ADMIN_ROLE` to `_owner`.
         */
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);

        /**
         * @dev Grant `MINTER_ROLE` to `_owner`.
         */
        _grantRole(MINTER_ROLE, _owner);
    }

    /**
     * @dev
     */
    function mint(address _to, uint256 _amount) external onlyRole(MINTER_ROLE) {
        _mint(_to, _amount);
    }
}
