"use client";

import * as schema from "@0xbuidlerhq/dinogaia.subgraph";

import { createClient } from "@ponder/client";
import { PonderProvider as PonderProviderPrimitive } from "@ponder/react";
import type { PropsWithChildren } from "react";

const client = createClient("http://localhost:8000/sql", { schema });

/**
 * Ponder provider.
 */
const PonderProvider = ({ children }: PropsWithChildren) => {
	return <PonderProviderPrimitive client={client}>{children}</PonderProviderPrimitive>;
};

export { PonderProvider, client, schema };
