// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./DinoAccount.sol";

interface IDinoNFT {
    function mint(address to) external returns (uint256);
}

contract DinoFactory {
    IDinoNFT public immutable dinoNFT;

    event DinoCreated(
        address indexed owner,
        uint256 indexed tokenId,
        address indexed account
    );

    error AccountAlreadyExists(address account);

    constructor(address _dinoNFT) {
        dinoNFT = IDinoNFT(_dinoNFT);
    }

    /// @notice Deterministic account address for a Dino
    function accountOf(uint256 tokenId) public view returns (address) {
        bytes32 salt = keccak256(abi.encode(tokenId));

        bytes memory initCode = abi.encodePacked(
            type(DinoAccount).creationCode,
            abi.encode(address(dinoNFT), tokenId)
        );

        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                salt,
                keccak256(initCode)
            )
        );

        return address(uint160(uint256(hash)));
    }

    /// @notice Mint Dino + deploy its account (one tx)
    function mintWithAccount()
        external
        returns (uint256 tokenId, address account)
    {
        // 1) Mint the Dino NFT
        tokenId = dinoNFT.mint(msg.sender);

        // 2) Compute deterministic account address
        account = accountOf(tokenId);

        // 3) Deploy if not already deployed
        if (account.code.length != 0) {
            revert AccountAlreadyExists(account);
        }

        bytes32 salt = keccak256(abi.encode(tokenId));

        new DinoAccount{salt: salt}(address(dinoNFT), tokenId);

        emit DinoCreated(msg.sender, tokenId, account);
    }
}
