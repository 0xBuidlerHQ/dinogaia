// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DinoAccount} from "./DinoAccount.sol";
import {DinoERC721} from "./DinoERC721.sol";

contract DinoRegistry {
    DinoERC721 public immutable dinoERC721;

    event DinoCreated(address indexed owner, uint256 indexed dinoId, address indexed account);

    error AccountAlreadyExists(address account);

    constructor(address _dinoERC721) {
        dinoERC721 = DinoERC721(_dinoERC721);
    }

    /// @notice Deterministic account address for a Dino
    function accountOf(uint256 dinoId) public view returns (address) {
        bytes32 salt = keccak256(abi.encode(dinoId));
        bytes memory initCode =
            abi.encodePacked(type(DinoAccount).creationCode, abi.encode(address(dinoERC721), dinoId));
        bytes32 hash = keccak256(abi.encodePacked(bytes1(0xff), address(this), salt, keccak256(initCode)));

        return address(uint160(uint256(hash)));
    }

    /// @notice Mint Dino + deploy its account (one tx)
    function mintWithAccount() external returns (uint256 dinoId, address account) {
        // 1) Mint the Dino NFT
        dinoId = dinoERC721.mint(msg.sender);

        // 2) Compute deterministic account address
        account = accountOf(dinoId);

        // 3) Deploy if not already deployed
        if (account.code.length != 0) {
            revert AccountAlreadyExists(account);
        }

        bytes32 salt = keccak256(abi.encode(dinoId));

        new DinoAccount{salt: salt}(address(dinoERC721), dinoId);

        emit DinoCreated(msg.sender, dinoId, account);
    }

    /// @notice Returns all Dino dinoIds owned by `owner` and their corresponding account addresses.
    /// @dev Uses ERC721Enumerable to iterate owned tokens directly.
    function dinosOf(address owner) external view returns (uint256[] memory dinoIds, address[] memory accounts) {
        uint256 balance = dinoERC721.balanceOf(owner);
        dinoIds = new uint256[](balance);
        accounts = new address[](balance);

        for (uint256 i = 0; i < balance; i++) {
            uint256 id = dinoERC721.tokenOfOwnerByIndex(owner, i);

            dinoIds[i] = id;
            accounts[i] = accountOf(id);
        }
    }
}
