// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {DinoAccount} from "@core/DinoAccount.sol";
import {DinoERC721} from "@core/DinoERC721.sol";

import {Dino} from "@dino/Dino.sol";

/**
 * @dev Events.
 */
contract DinoFactory {
    /**
     * @dev Struct DinoContext.
     */
    struct DinoContext {
        uint256 dinoId;
        //
        DinoAccount dinoAccount;
        Dino.DinoData dino;
    }

    /**
     * @dev Immutables.
     */
    DinoERC721 public immutable dinoERC721;
    Dino public immutable dino;

    /**
     * @dev Events.
     */
    event DinoCreated(address indexed owner, DinoContext dinoContext);

    /**
     * @dev Constructor.
     */
    constructor(DinoERC721 _dinoERC721, Dino _dino) {
        dinoERC721 = _dinoERC721;
        dino = _dino;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @dev
     */
    function mint(Dino.Params calldata _params) external returns (uint256 dinoId, DinoAccount dinoAccount) {
        dinoId = dinoERC721.mint(msg.sender);
        dinoAccount = new DinoAccount{salt: _generateSalt(dinoId)}(dinoId, address(dinoERC721));

        dino.initialize(dinoId, _params);

        emit DinoCreated(
            msg.sender,
            DinoContext({
                dinoId: dinoId,
                //
                dinoAccount: dinoAccount,
                dino: dino.getDino(dinoId)
            })
        );
    }

    /**
     * @dev
     */
    function getDinoContext(uint256 _dinoId) public view returns (DinoContext memory dinoContext) {
        dinoContext = DinoContext({
            dinoId: _dinoId,
            //
            dinoAccount: _getDinoAccount(_dinoId),
            dino: dino.getDino(_dinoId)
        });
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
