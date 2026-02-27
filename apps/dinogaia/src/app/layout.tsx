import "./system.css";

import { inter, montserrat, sourceCodePro, spaceGrotesk, syne } from "@0xbuidlerhq/ui/fonts";
import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Loader } from "@components/Loader";
import { Footer } from "@components/layout/footer";
import { Header } from "@components/layout/header";
import { tronicaMono } from "@config/fonts";
import { Providers } from "@providers/index";

import type { PropsWithChildren } from "react";

export { metadata } from "./metadata";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"relative",
					"antialiased",
					"bg-background",
					"text-foreground",
					"font-tronica-mono",
					"tracking-tighter",
					inter.variable,
					montserrat.variable,
					syne.variable,
					sourceCodePro.variable,
					tronicaMono.variable,
					spaceGrotesk.variable,
				)}
			>
				<Providers>
					<Loader>
						<main className="grow flex flex-col min-h-dvh">
							<Header />

							<Box className="flex grow min-h-0">
								<Box className="grow">{children}</Box>
							</Box>

							<Footer />
						</main>
					</Loader>
				</Providers>
			</body>
		</html>
	);
};

export default Layout;
