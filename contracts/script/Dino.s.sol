// script/Deploy.s.sol
pragma solidity ^0.8.20;

import "forge-std/console2.sol";

import {DinoERC721} from "../src/dino/DinoERC721.sol";

import {EmeraldERC20} from "../src/economy/EmeraldERC20.sol";
import {JobsRegistry} from "../src/economy/JobsRegistry.sol";
import {JobsManager} from "../src/economy/JobsManager.sol";
import {SpeciesRegistry} from "../src/dino/SpeciesRegistry.sol";
import {SpeciesManager} from "../src/dino/SpeciesManager.sol";
import {DinoFactory} from "../src/dino/DinoFactory.sol";
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
         * @dev Pures.
         */
        DinoERC721 dinoERC721 = new DinoERC721{salt: SALT}(deployer.addr);
        EmeraldERC20 emeraldERC20 = new EmeraldERC20{salt: SALT}(deployer.addr);

        /**
         * @dev Registries.
         */
        JobsRegistry jobsRegistry = new JobsRegistry{salt: SALT}(deployer.addr);
        SpeciesRegistry speciesRegistry = new SpeciesRegistry{salt: SALT}(deployer.addr);

        /**
         * @dev Setters.
         */
        SpeciesManager speciesManager = new SpeciesManager{salt: SALT}(deployer.addr, speciesRegistry);

        /**
         * @dev Factories.
         */
        DinoFactory dinoFactory = new DinoFactory{salt: SALT}(dinoERC721, speciesManager);

        /**
         * @dev Managers.
         */
        JobsManager jobsManager = new JobsManager{salt: SALT}(deployer.addr, emeraldERC20, dinoFactory, jobsRegistry);

        stop();

        /**
         * @dev Update roles.
         */
        start(deployer);
        dinoERC721.grantRole(dinoERC721.MINTER_ROLE(), address(dinoFactory));
        dinoERC721.revokeRole(dinoERC721.MINTER_ROLE(), deployer.addr);

        emeraldERC20.grantRole(emeraldERC20.MINTER_ROLE(), address(jobsManager));

        speciesManager.grantRole(speciesManager.DEFAULT_ADMIN_ROLE(), address(dinoFactory));

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
        console2.log("EmeraldERC20: ", address(emeraldERC20));

        console2.log("JobsRegistry: ", address(jobsRegistry));
        console2.log("SpeciesRegistry: ", address(speciesRegistry));

        console2.log("SpeciesManager: ", address(speciesManager));
        console2.log("JobsManager: ", address(jobsManager));

        console2.log("DinoFactory: ", address(dinoFactory));

        //
        console2.log("00: ", address(dinoFactory.getDinoAccount((0))));
        console2.log("00: ", address(dinoFactory.getDinoAccount((1))));
        console2.log("00: ", address(dinoFactory.getDinoAccount((2))));

        start(alice);

        dinoFactory.mint(1);
        stop();
    }
}
