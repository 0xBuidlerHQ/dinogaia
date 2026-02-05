import "./system.css";

import { inter, montserrat, sourceCodePro, syne } from "@0xbuidlerhq/ui/fonts";
import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { Footer } from "@components/layout/footer";
import { Header } from "@components/layout/header";
import { Providers } from "@config/providers";
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
					"font-inter",
					"tracking-tighter",
					inter.variable,
					montserrat.variable,
					syne.variable,
					sourceCodePro.variable,
				)}
			>
				<Providers>
					<main className="grow flex flex-col min-h-[100dvh]">
						<Header />

						<Box className="flex grow min-h-0">
							<Box className="grow">{children}</Box>
						</Box>

						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	);
};

export default Layout;
