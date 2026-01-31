// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC6909} from "@openzeppelin/contracts/token/ERC6909/ERC6909.sol";
import {ERC6909Metadata} from "@openzeppelin/contracts/token/ERC6909/extensions/ERC6909Metadata.sol";
import {ERC6909TokenSupply} from "@openzeppelin/contracts/token/ERC6909/extensions/ERC6909TokenSupply.sol";
import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";

/**
 * @dev
 */
contract DinoItemsERC6909 is ERC6909Metadata, ERC6909TokenSupply, AccessControl {
    /**
     * @dev Constants.
     */
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /**
     * @dev Struct Item.
     */
    // struct Item {}

    /**
     * @dev Variables.
     */
    uint256 public itemIdsIndex = 0;

    /**
     * @dev Events.
     */
    event ItemDefined(uint256 indexed id, string name, string symbol, uint8 decimals);

    /**
     * @dev Constructor.
     */
    constructor(address _owner) {
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
    function mint(address _to, uint256 _id, uint256 _amount) external onlyRole(MINTER_ROLE) {
        _mint(_to, _id, _amount);
    }

    /**
     * @dev
     */
    function burn(address _from, uint256 _id, uint256 _amount) external {
        address caller = _msgSender();

        if (caller != _from && !isOperator(_from, caller)) {
            _spendAllowance(_from, caller, _id, _amount);
        }

        _burn(_from, _id, _amount);
    }

    /**
     * @dev
     */
    function defineItem(string memory _name, string memory _symbol, uint8 _decimals)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
        returns (uint256 id)
    {
        id = itemIdsIndex++;

        _setName(id, _name);
        _setSymbol(id, _symbol);
        _setDecimals(id, _decimals);

        emit ItemDefined({id: id, name: _name, symbol: _symbol, decimals: _decimals});
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC6909, AccessControl, IERC165)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev
     */
    function _update(address from, address to, uint256 id, uint256 amount)
        internal
        override(ERC6909TokenSupply, ERC6909)
    {
        super._update(from, to, id, amount);
    }
}
