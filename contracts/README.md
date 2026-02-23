# DinoGaia Contracts

## Contracts
DinoGaia Contracts bundles the guarded logic, rich data, and extensible modules that power the Dino minting, progression, and commerce experiences. Instead of piecing together disparate contracts for factories, caves, shops, and species metadata, this package gives devs a single opinionated workspace with modules, Wagmi-ready artifacts, and tooling to regenerate bindings. It keeps the on-chain state machine synchronized with the broader DinoGaia metaverse so both on-chain actors and frontend teams can trust the same source of truth.

## Features
- 🛡️ **Modular guards** — Each module (cave, jobs, shop, etc.) exposes encapsulated state and access controls to keep upgrades safe and incremental.
- 📦 **Wagmi+TypeScript outputs** — Generates Wagmi hooks plus TypeScript declarations so frontends, bots, and indexers reuse the exact ABI definitions.
- 🔁 **Foundry-native workflows** — Forge scripts, tests, and deployments run locally with predictable, cacheable builds inside the monorepo.
- 🧬 **Aligned schema** — Contract storage mirrors the subgraph schema, making data querying predictable from mint to leaderboard.

## Tech stack
- **Solidity + Foundry** (Forge/Anvil/Cast) for testing, fuzzing, and deployment.
- **Wagmi CLI** to emit React-ready contract hooks and shared types.
- **Typescript scripts** for supplemental type generation and bundling.
- **pnpm + turbo** orchestrating builds across the mono repo.

## Installation
```bash
cd contracts
pnpm install
```

Run targeted generators when ABI changes:
```bash
pnpm build-wagmi    # regenerate Wagmi hooks after Solidity edits
pnpm build-types    # refresh helper types consumed by apps
```

## Usage example
Build the Solidity contracts, emit Wagmi bindings, then run your Forge suite:
```bash
cd contracts
forge build
pnpm build-wagmi
pnpm build-types
forge test
```
The generated artifacts live in `packages/contract` and `lib/`, so import them directly in `apps/dinogaia` or any Wagmi client.

## Roadmap
- [x] Define DinoFactory + species modules
- [ ] Expand cave + jobs modules with upgradeable guards
- [ ] Publish metadata for CaveShop economics + events
- [ ] Automate generation of TypeScript factories for new modules

## Contribution & Community
We embrace respectful collaboration:
1. Open an issue if you discover a bug in the Solidity logic, Forge scripts, or generated bindings.
