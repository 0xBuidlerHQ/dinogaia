## Solidity style guide (project-wide)

- **Headers**: Start every Solidity file with `// SPDX-License-Identifier: MIT` followed by `pragma solidity ^0.8.20;`.
- **Imports**: Group external imports first, then internal; use absolute import aliases (e.g., `@items/...`). Keep one import per line and sort alphabetically within each group.
- **Layout**: Mirror the section separators used in `ItemsSetBase.sol` (`////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////` blocks) to visually group constructors, storage, events, errors, and core logic.
- **Doc comments**: Precede contract, struct, enum, event, error, and function declarations with `/** @dev ... */` style comments; keep them brief.
- **Naming**: Prefix constructor parameters with `_`; prefer descriptive storage names (e.g., `itemsSetBase`), and keep enums/structs in PascalCase, constants in ALL_CAPS.
- **Visibility & order**: Declare constants/immutables first, then enums, structs, storage, events, errors, constructor, and functions. Use the explicit visibility specifier on everything.
- **State updates**: Keep public state mutation minimal; prefer `internal`/`private` helpers. When overriding, call `super` as in `ItemsSetBase._update`.
- **Errors over require strings**: Define custom errors near the top and reuse them.
- **Gas-friendly patterns**: Use memory structs/arrays when constructing item definitions; avoid redundant storage reads.
- **Formatting**: 4-space indents, no tabs; place `else`/`else if` on the same line as closing brace; avoid trailing whitespace; keep lines under ~120 chars.
- **Safety**: Validate inputs early and revert with specific errors; avoid silent no-ops—use explicit guards as in `InvalidItemId`.
