// script/Deploy.s.sol
pragma solidity ^0.8.20;

import "forge-std/console2.sol";

import {DinoERC721} from "../src/dino/DinoERC721.sol";
import {DinoRegistry} from "../src/dino/DinoRegistry.sol";

import {EmeraldERC20} from "../src/economy/EmeraldERC20.sol";
import {DinoJobsRegistry} from "../src/economy/DinoJobsRegistry.sol";
import {DinoJobsManager} from "../src/economy/DinoJobsManager.sol";

import {Actors} from "./utils/Actors.s.sol";

contract Deploy is Actors {
    bytes32 internal constant SALT = keccak256("SALT");

    function run() external {
        Actor memory deployer = actor("DEPLOYER", 0);
        Actor memory alice = actor("alice", 1);
        Actor memory bob = actor("bob", 2);

        logActor(deployer);
        logActor(alice);
        logActor(bob);

        /*******************************
         * @dev Deploy contracts.
         *******************************/
        start(deployer);

        /**
         * @dev Dinos.
         */
        DinoERC721 dinoERC721 = new DinoERC721{salt: SALT}(deployer.addr);
        DinoRegistry dinoRegistry = new DinoRegistry{salt: SALT}(address(dinoERC721));

        /**
         * @dev Economy.
         */
        EmeraldERC20 emeraldERC20 = new EmeraldERC20{salt: SALT}(deployer.addr);
        DinoJobsRegistry dinoJobsRegistry = new DinoJobsRegistry{salt: SALT}(deployer.addr);
        DinoJobsManager dinoJobsManager =
            new DinoJobsManager{salt: SALT}(deployer.addr, emeraldERC20, dinoRegistry, dinoJobsRegistry);

        stop();

        /**
         * @dev Update roles.
         */
        start(deployer);
        dinoERC721.grantRole(dinoERC721.MINTER_ROLE(), address(dinoRegistry));
        dinoERC721.revokeRole(dinoERC721.MINTER_ROLE(), deployer.addr);

        emeraldERC20.grantRole(emeraldERC20.MINTER_ROLE(), address(dinoJobsManager));
        stop();

        /**
         * @dev Misc.
         */
        start(deployer);
        emeraldERC20.mint(deployer.addr, 100_000 ether);
        stop();

        /**
         * @dev Logs.
         */
        console2.log("DinoERC721: ", address(dinoERC721));
        console2.log("DinoRegistry: ", address(dinoRegistry));

        console2.log("EmeraldERC20: ", address(emeraldERC20));
        console2.log("DinoJobsRegistry: ", address(dinoJobsRegistry));
        console2.log("DinoJobsManager: ", address(dinoJobsManager));
    }
}
