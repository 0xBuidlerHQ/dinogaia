// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";

/**
 * @dev DinoAccount.
 */
contract DinoAccount {
    /**
     * @dev Struct Call.
     */
    struct Call {
        address target;
        uint256 value;
        bytes data;
    }

    /**
     * @dev Immutables.
     */
    uint256 public immutable dinoId;
    address public immutable dinoERC721;

    /**
     * @dev Errors.
     */
    error NotDinoOwner(address caller);
    error CallFailed(bytes returndata);

    /**
     * @dev Events.
     */
    event Executed(address indexed target, uint256 value, bytes data, bytes result);

    /**
     * @dev Modifiers.
     */
    modifier onlyOwner() {
        address owner = IERC721(dinoERC721).ownerOf(dinoId);
        if (msg.sender != owner) revert NotDinoOwner(msg.sender);
        _;
    }

    /**
     * @dev Constructor.
     */
    constructor(uint256 _dinoId, address _dinoERC721) {
        dinoERC721 = _dinoERC721;
        dinoId = _dinoId;
    }

    /**
     * @dev
     */
    function execute(Call calldata call_) external onlyOwner returns (bytes memory result) {
        return _execute(call_);
    }

    /**
     * @dev
     */
    function executeBatch(Call[] calldata calls) external onlyOwner returns (bytes[] memory results) {
        uint256 n = calls.length;
        results = new bytes[](n);
        for (uint256 i = 0; i < n; i++) {
            results[i] = _execute(calls[i]);
        }
    }

    /**
     * @dev
     */
    function _execute(Call calldata call_) internal returns (bytes memory result) {
        (bool ok, bytes memory ret) = call_.target.call{value: call_.value}(call_.data);
        if (!ok) {
            if (ret.length == 0) revert CallFailed(ret);
            assembly {
                revert(add(ret, 0x20), mload(ret))
            }
        }
        emit Executed(call_.target, call_.value, call_.data, ret);
        return ret;
    }

    receive() external payable {}
    fallback() external payable {}
}
