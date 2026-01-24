// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DinoAccount} from "./DinoAccount.sol";
import {DinoERC721} from "./DinoERC721.sol";

struct Dino {
    uint256 dinoId;
    DinoAccount dinoAccount;
}

contract DinoRegistry {
    DinoERC721 public immutable dinoERC721;

    event DinoCreated(address indexed owner, uint256 indexed dinoId, DinoAccount indexed account);

    constructor(address _dinoERC721) {
        dinoERC721 = DinoERC721(_dinoERC721);
    }

    function mint() external returns (uint256 dinoId, DinoAccount dinoAccount) {
        dinoId = dinoERC721.mint(msg.sender);
        dinoAccount = new DinoAccount{salt: _generateSalt(dinoId)}(address(dinoERC721), dinoId);

        emit DinoCreated(msg.sender, dinoId, dinoAccount);
    }

    function dino(uint256 _dinoId) public view returns (Dino memory _dino) {
        _dino = Dino({dinoId: _dinoId, dinoAccount: _dinoAccount(_dinoId)});
    }

    function dinosOf(address owner) external view returns (Dino[] memory dinos) {
        uint256 balance = dinoERC721.balanceOf(owner);
        dinos = new Dino[](balance);

        for (uint256 i = 0; i < balance; i++) {
            uint256 id = dinoERC721.tokenOfOwnerByIndex(owner, i);
            dinos[i] = Dino({dinoId: id, dinoAccount: _dinoAccount(id)});
        }
    }

    /**
     * @dev
     */
    function _dinoAccount(uint256 _dinoId) internal view returns (DinoAccount) {
        bytes32 salt = _generateSalt(_dinoId);
        bytes memory initCode = _generateInitCode(_dinoId);
        bytes32 hash = keccak256(abi.encodePacked(bytes1(0xff), address(this), salt, keccak256(initCode)));

        return DinoAccount(payable(address(uint160(uint256(hash)))));
    }

    /**
     * @dev
     */
    function _generateSalt(uint256 _dinoId) internal pure returns (bytes32 salt) {
        salt = keccak256(abi.encode(_dinoId));
    }

    /**
     * @dev
     */
    function _generateInitCode(uint256 _dinoId) internal view returns (bytes memory initCode) {
        initCode = abi.encodePacked(type(DinoAccount).creationCode, abi.encode(address(dinoERC721), _dinoId));
    }
}
