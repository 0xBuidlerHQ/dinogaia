// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {IERC721} from "@openzeppelin/contracts/interfaces/IERC721.sol";

/**
 * @title DinoAccount
 * @notice Minimal per-Dino smart account controlled by the owner of a Dino NFT.
 */
contract DinoAccount {
    address public immutable dinoNFT;
    uint256 public immutable tokenId;

    error NotDinoOwner(address caller);
    error CallFailed(bytes returndata);

    event Executed(
        address indexed target,
        uint256 value,
        bytes data,
        bytes result
    );

    constructor(address _dinoNFT, uint256 _tokenId) {
        dinoNFT = _dinoNFT;
        tokenId = _tokenId;
    }

    /// @notice Returns the current controller (owner of the Dino NFT).
    function owner() public view returns (address) {
        return IERC721(dinoNFT).ownerOf(tokenId);
    }

    modifier onlyOwner() {
        address o = owner();
        if (msg.sender != o) revert NotDinoOwner(msg.sender);
        _;
    }

    /**
     * @notice Execute an arbitrary call as the DinoAccount.
     * @dev This is the core "wallet" primitive.
     *
     * @param target Address to call
     * @param value ETH value to send
     * @param data Calldata
     * @return result Raw returned data
     */
    function execute(
        address target,
        uint256 value,
        bytes calldata data
    ) external onlyOwner returns (bytes memory result) {
        (bool ok, bytes memory ret) = target.call{value: value}(data);
        if (!ok) revert CallFailed(ret);
        emit Executed(target, value, data, ret);
        return ret;
    }

    /**
     * @notice Execute multiple calls in one tx (quality-of-life).
     */
    function executeBatch(
        address[] calldata targets,
        uint256[] calldata values,
        bytes[] calldata datas
    ) external onlyOwner returns (bytes[] memory results) {
        uint256 n = targets.length;
        require(values.length == n && datas.length == n, "LengthMismatch");

        results = new bytes[](n);
        for (uint256 i = 0; i < n; i++) {
            (bool ok, bytes memory ret) = targets[i].call{value: values[i]}(
                datas[i]
            );
            if (!ok) revert CallFailed(ret);
            results[i] = ret;
            emit Executed(targets[i], values[i], datas[i], ret);
        }
    }

    /// @notice Allow receiving ETH.
    receive() external payable {}

    fallback() external payable {}
}
