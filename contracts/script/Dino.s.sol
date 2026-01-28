// script/Deploy.s.sol
pragma solidity ^0.8.20;

import "forge-std/console2.sol";

import {DinoERC721} from "@core/DinoERC721.sol";

import {EmeraldERC20} from "@economy/tokens/EmeraldERC20.sol";

import {JobsRegistry} from "@registry/JobsRegistry.sol";
import {SpeciesRegistry} from "@registry/SpeciesRegistry.sol";

import {DinoFactory} from "@dino/DinoFactory.sol";
import {DinoGenesis} from "@dino/DinoGenesis.sol";

import {JobsModule} from "@modules/jobs/JobsModule.sol";

import {Actors} from "./utils/Actors.s.sol";
import {Packages} from "./utils/Packages.s.sol";

contract Deploy is Actors, Packages {
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
         * @dev Genesis.
         */
        DinoGenesis dinoGenesis = new DinoGenesis{salt: SALT}(deployer.addr, speciesRegistry);

        /**
         * @dev Factories.
         */
        DinoFactory dinoFactory = new DinoFactory{salt: SALT}(dinoERC721, dinoGenesis);

        /**
         * @dev Modules.
         */
        JobsModule jobsModule = new JobsModule{salt: SALT}(deployer.addr, emeraldERC20, dinoFactory, jobsRegistry);

        stop();

        /**
         * @dev Update roles.
         */
        start(deployer);
        dinoERC721.grantRole(dinoERC721.MINTER_ROLE(), address(dinoFactory));
        dinoERC721.revokeRole(dinoERC721.MINTER_ROLE(), deployer.addr);

        emeraldERC20.grantRole(emeraldERC20.MINTER_ROLE(), address(jobsModule));

        dinoGenesis.grantRole(dinoGenesis.DEFAULT_ADMIN_ROLE(), address(dinoFactory));

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
        addDeployment("DinoERC721", address(dinoERC721));
        addDeployment("EmeraldERC20", address(emeraldERC20));
        addDeployment("JobsRegistry", address(jobsRegistry));
        addDeployment("SpeciesRegistry", address(speciesRegistry));
        addDeployment("DinoGenesis", address(dinoGenesis));
        addDeployment("DinoFactory", address(dinoFactory));
        addDeployment("JobsModule", address(jobsModule));
    }
}
