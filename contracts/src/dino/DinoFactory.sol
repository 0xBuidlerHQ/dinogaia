// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DinoAccount} from "@core/DinoAccount.sol";
import {DinoERC721} from "@core/DinoERC721.sol";

import {DinoGenesis} from "@dino/DinoGenesis.sol";

/**
 * @dev Events.
 */
contract DinoFactory {
    /**
     * @dev Struct Dino.
     */
    struct Dino {
        uint256 dinoId;
        DinoAccount dinoAccount;
        DinoGenesis.GenesisData dinoGenesisData;
    }

    /**
     * @dev Immutables.
     */
    DinoERC721 public immutable dinoERC721;
    DinoGenesis public immutable dinoGenesis;

    /**
     * @dev Events.
     */
    event DinoCreated(address indexed owner, uint256 indexed dinoId, DinoAccount indexed account);

    /**
     * @dev Constructor.
     */
    constructor(DinoERC721 _dinoERC721, DinoGenesis _dinoGenesis) {
        dinoERC721 = _dinoERC721;
        dinoGenesis = _dinoGenesis;
    }

    /**
     * @dev
     */
    function mint(DinoGenesis.GenesisData calldata genesisData)
        external
        returns (uint256 dinoId, DinoAccount dinoAccount)
    {
        dinoId = dinoERC721.mint(msg.sender);
        dinoAccount = new DinoAccount{salt: _generateSalt(dinoId)}(dinoId, address(dinoERC721));

        dinoGenesis.setGenesisData(dinoId, genesisData);

        emit DinoCreated(msg.sender, dinoId, dinoAccount);
    }

    /**
     * @dev
     */
    function getDino(uint256 _dinoId) public view returns (Dino memory dino) {
        dino = Dino({
            dinoId: _dinoId,
            //
            dinoAccount: _getDinoAccount(_dinoId),
            dinoGenesisData: dinoGenesis.getGenesisData(_dinoId)
        });
    }

    /**
     * @dev
     */
    function getDinosOfOwner(address owner) external view returns (Dino[] memory dinosOfOwner) {
        uint256 balance = dinoERC721.balanceOf(owner);
        dinosOfOwner = new Dino[](balance);

        for (uint256 i = 0; i < balance; i++) {
            uint256 dinoId = dinoERC721.tokenOfOwnerByIndex(owner, i);
            dinosOfOwner[i] = getDino(dinoId);
        }
    }

    /**
     * @dev
     */
    function _getDinoAccount(uint256 _dinoId) internal view returns (DinoAccount) {
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
        initCode = abi.encodePacked(type(DinoAccount).creationCode, _dinoId, abi.encode(address(dinoERC721)));
    }
}
