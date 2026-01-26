// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";

/**
 * @title DinoAccount
 * @notice Minimal per-Dino smart account controlled by the owner of a Dino NFT.
 */
contract DinoAccount {
    uint256 public immutable dinoId;

    address public immutable dinoERC721;
    address public immutable dinoFactory;

    struct Call {
        address target;
        uint256 value;
        bytes data;
    }

    error NotDinoOwner(address caller);
    error CallFailed(bytes returndata);

    event Executed(address indexed target, uint256 value, bytes data, bytes result);

    constructor(uint256 _dinoId, address _dinoERC721) {
        dinoERC721 = _dinoERC721;
        dinoId = _dinoId;
    }

    /// @notice Returns the current controller (owner of the Dino NFT).
    function owner() public view returns (address) {
        return IERC721(dinoERC721).ownerOf(dinoId);
    }

    modifier onlyOwner() {
        address o = owner();
        if (msg.sender != o) revert NotDinoOwner(msg.sender);
        _;
    }

    /**
     * @dev Execute one call.
     */
    function execute(Call calldata call_) external onlyOwner returns (bytes memory result) {
        (bool ok, bytes memory ret) = call_.target.call{value: call_.value}(call_.data);
        if (!ok) revert CallFailed(ret);
        emit Executed(call_.target, call_.value, call_.data, ret);
        return ret;
    }

    /**
     * @dev Execute multiple calls in one tx (quality-of-life).
     */
    function executeBatch(Call[] calldata calls) external onlyOwner returns (bytes[] memory results) {
        uint256 n = calls.length;
        results = new bytes[](n);
        for (uint256 i = 0; i < n; i++) {
            Call calldata c = calls[i];
            (bool ok, bytes memory ret) = c.target.call{value: c.value}(c.data);
            if (!ok) revert CallFailed(ret);
            results[i] = ret;
            emit Executed(c.target, c.value, c.data, ret);
        }
    }

    /// @notice Allow receiving ETH.
    receive() external payable {}

    fallback() external payable {}
}
