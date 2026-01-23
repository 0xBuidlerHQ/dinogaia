// script/Deploy.s.sol
pragma solidity ^0.8.20;

import "forge-std/console2.sol";

import {DinoERC721} from "../src/dino/DinoERC721.sol";
import {DinoAccountFactory} from "../src/dino/DinoAccountFactory.sol";

import {EmeraldERC20} from "../src/economy/EmeraldERC20.sol";
import {DinoJobsKB} from "../src/economy/DinoJobsKB.sol";
import {DinoJobs} from "../src/economy/DinoJobs.sol";

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
        DinoAccountFactory dinoAccountFactory = new DinoAccountFactory{salt: SALT}(address(dinoERC721));

        /**
         * @dev Economy.
         */
        EmeraldERC20 emeraldERC20 = new EmeraldERC20{salt: SALT}(deployer.addr);
        DinoJobsKB dinoJobsKb = new DinoJobsKB{salt: SALT}(deployer.addr);
        DinoJobs dinoJobs = new DinoJobs{salt: SALT}(deployer.addr, dinoAccountFactory, dinoJobsKb, emeraldERC20);

        stop();

        /**
         * @dev Update roles.
         */
        start(deployer);
        dinoERC721.grantRole(dinoERC721.MINTER_ROLE(), address(dinoAccountFactory));
        dinoERC721.revokeRole(dinoERC721.MINTER_ROLE(), deployer.addr);
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
        console2.log("DinoAccountFactory: ", address(dinoAccountFactory));

        console2.log("EmeraldERC20: ", address(emeraldERC20));
        console2.log("DinoJobsKB: ", address(dinoJobsKb));
        console2.log("DinoJobs: ", address(dinoJobs));
    }
}
