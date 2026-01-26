// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DinoAccount} from "./DinoAccount.sol";
import {DinoERC721} from "./DinoERC721.sol";

import {SpeciesManager} from "./SpeciesManager.sol";

import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

struct Dino {
    uint256 dinoId;
    DinoAccount dinoAccount;
}

contract DinoFactory is IERC721Receiver {
    DinoERC721 public immutable dinoERC721;

    SpeciesManager public immutable speciesManager;

    event DinoCreated(address indexed owner, uint256 indexed dinoId, DinoAccount indexed account);

    constructor(DinoERC721 _dinoERC721, SpeciesManager _dinoSpeciesManager) {
        dinoERC721 = _dinoERC721;
        speciesManager = _dinoSpeciesManager;
    }

    function mint(uint256 dinoSpeciesId) external returns (uint256 dinoId, DinoAccount dinoAccount) {
        dinoId = dinoERC721.mint(address(this));
        dinoAccount = new DinoAccount{salt: _generateSalt(dinoId)}(dinoId, address(dinoERC721));

        /**
         * @dev Set Dino params.
         */
        DinoAccount.Call[] memory calls = new DinoAccount.Call[](1);
        calls[0] = DinoAccount.Call({
            target: address(speciesManager),
            value: 0,
            data: abi.encodeWithSelector(SpeciesManager.selectSpecies.selector, dinoId, dinoSpeciesId)
        });

        dinoAccount.executeBatch(calls);
        dinoERC721.safeTransferFrom(address(this), msg.sender, dinoId);

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
