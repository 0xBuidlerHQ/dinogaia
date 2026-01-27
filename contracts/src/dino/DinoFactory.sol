// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

import {DinoAccount} from "@core/DinoAccount.sol";
import {DinoERC721} from "@core/DinoERC721.sol";

import {DinoGenesis} from "@dino/DinoGenesis.sol";

struct Dino {
    uint256 dinoId;
    DinoAccount dinoAccount;
}

contract DinoFactory is IERC721Receiver {
    DinoERC721 public immutable dinoERC721;

    DinoGenesis public immutable dinoGenesis;

    event DinoCreated(address indexed owner, uint256 indexed dinoId, DinoAccount indexed account);

    constructor(DinoERC721 _dinoERC721, DinoGenesis _dinoGenesis) {
        dinoERC721 = _dinoERC721;
        dinoGenesis = _dinoGenesis;
    }

    function mint(DinoGenesis.Genesis calldata genesis) external returns (uint256 dinoId, DinoAccount dinoAccount) {
        dinoId = dinoERC721.mint(msg.sender);
        dinoAccount = new DinoAccount{salt: _generateSalt(dinoId)}(dinoId, address(dinoERC721));

        dinoGenesis.set(dinoId, genesis);

        emit DinoCreated(msg.sender, dinoId, dinoAccount);
    }

    function getDino(uint256 _dinoId) public view returns (Dino memory dino) {
        dino = Dino({dinoId: _dinoId, dinoAccount: getDinoAccount(_dinoId)});
    }

    function getDinosOfOwner(address owner) external view returns (Dino[] memory dinosOfOwner) {
        uint256 balance = dinoERC721.balanceOf(owner);
        dinosOfOwner = new Dino[](balance);

        for (uint256 i = 0; i < balance; i++) {
            uint256 id = dinoERC721.tokenOfOwnerByIndex(owner, i);
            dinosOfOwner[i] = Dino({dinoId: id, dinoAccount: getDinoAccount(id)});
        }
    }

    function onERC721Received(address, address, uint256, bytes calldata) external pure override returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }

    /**
     * @dev
     */
    function getDinoAccount(uint256 _dinoId) public view returns (DinoAccount) {
        bytes32 salt = _generateSalt(_dinoId);
        bytes memory initCode = _generateInitCode(_dinoId);
        bytes32 hash = keccak256(abi.encodePacked(bytes1(0xff), address(this), salt, keccak256(initCode)));

        return DinoAccount(payable(address(uint160(uint256(hash)))));
    }

    /**
     * @dev
     */
    function _generateSalt(uint256 _dinoId) public pure returns (bytes32 salt) {
        salt = keccak256(abi.encode(_dinoId));
    }

    /**
     * @dev
     */
    function _generateInitCode(uint256 _dinoId) internal view returns (bytes memory initCode) {
        initCode = abi.encodePacked(type(DinoAccount).creationCode, _dinoId, abi.encode(address(dinoERC721)));
    }
}
