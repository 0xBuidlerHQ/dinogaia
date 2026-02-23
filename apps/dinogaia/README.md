# DinoGaia App

## App
The DinoGaia App stitches together the contracts, subgraph, and creative direction into a single, responsive experience. Instead of patching together dashboards, this Next.js + Turbopack shell ships reusable components, live subgraph queries, and Wagmi-powered wallets that keep minting, leveling, and trading data synchronized. It lets product, community, and analytics teams tell the full Dino story without rebuilding connectors or rewriting contracts.

## Features
- 🧭 **Subgraph-driven hero** — Pulls every Dino record (genesis, stats, owner history) through `@0xbuidlerhq/dinogaia.subgraph` and surfaces it in intuitive cards and timelines.
- 🪙 **Wallet-native interactions** — Wagmi hooks talk to `@0xbuidlerhq/dinogaia.contracts` so users can connect, mint, and inspect their collectible ecosystem without leaving the experience.
- ✨ **Cinematic presentation** — Motion, Three.js, and custom typography keep the interface premium while Tailwind utilities ensure responsive polish.
- ⚙️ **Composable hooks** — Shared hooks like `useJobsManager`, `useSpeciesRegistry`, and `useDinoFactory` centralize data fetching and make integration simple for other apps.

## Tech stack
- **Next.js (Turbopack)** for server-rendered pages with blazing fast refresh.
- **Tailwind + Motion + React Three Fiber** for expressive layouts and interactive effects.
- **Wagmi + Viem** to interact with DinoGaia contracts and sign transactions.
- **Ponder subgraph + Hono API** as the canonical data layer for dinos and their prestige stats.
- **TanStack Query/Table** for performant data loading and sortable leaderboards.

## Installation
```bash
cd apps/dinogaia
pnpm install
pnpm dev
```

- Launches Next/Turbopack on `http://localhost:3000`.
- Ensure `server/subgraph` is running (`pnpm --filter @0xbuidlerhq/dinogaia.subgraph dev`) so GraphQL data loads.

## Usage example
Import the provided hooks and decode a Dino card:
```tsx
import { useDinoFactory } from "../features/dinos/hooks/useDinoFactory";

function DinoCard({ dinoId }: { dinoId: string }) {
  const { data, isLoading } = useDinoFactory(dinoId);

  if (isLoading) return <p>Loading Dino...</p>;

  return (
    <article>
      <h3>{data?.name}</h3>
      <p>Owner: {data?.owner}</p>
      <p>Level {data?.level} · {data?.weight} kg</p>
    </article>
  );
}
```

Want raw GraphQL? Query the dev server on `http://localhost:8000/graphql`:
```graphql
query DinoOverview($dinoId: BigInt!) {
  dino(where: { dinoId: $dinoId }) {
    name
    owner
    xp
    alive
  }
}
```

## Roadmap
- [x] Wire up Telos/Wagmi wallet flows to the DinoFactory contract
- [ ] Build leaderboard views for each species and habitat
- [ ] Surface job scheduling and cave status in the UI
- [ ] Collaborate with creative team on cinematic lore scenes and collectibles

## Contribution & Community
Help keep the Dinoia experience premium:
1. Open issues when you spot UX regressions, misaligned data, or Formik edge cases.
2. Target PRs at `apps/dinogaia`, include screenshots, and add regression tests if you touch critical flows.
3. Follow the repo’s code of conduct, tag maintainers for fast reviews, and sync with the contracts/subgraph teams when modifying shared hooks.

## Footer
**Author:** BuidlerHQ · [@buidlerhq](https://twitter.com/buidlerhq)
**Credits:** Next.js, Turbopack, Wagmi, Viem, Tailwind, and the DinoGaia contract stack.
**License:** MIT (same as the monorepo).
