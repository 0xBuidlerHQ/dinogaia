"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { H1 } from "@0xbuidlerhq/ui/system/base/typography";
import { PAGES } from "@config/pages";
import { useDinogaia } from "@providers/dinogaia";
import { useWeb3 } from "@providers/web3";
import { useLoader } from "@stores/useStore";
import { usePathname, useRouter } from "next/navigation";
import { type PropsWithChildren, useEffect } from "react";

type LoaderProps = PropsWithChildren;

const LoaderContent = () => {
	const { ready, isConnected, isDisconnected } = useWeb3();
	const { q, myDinos } = useDinogaia();
	const { setIsLoading, isLoading } = useLoader();
	const router = useRouter();
	const pathname = usePathname();

	/**
	 * @dev
	 */
	useEffect(() => {
		// - If website is ready & loading.
		if (ready && isLoading) {
			// - If wallet is connected.
			if (isConnected) {
				// - If qMyDinos is not fetching.
				if (!q.qMyDinos.isFetching) {
					// - If qMyDinos is success.
					if (q.qMyDinos.isSuccess) {
						// - If more than one dino, let user go to their path.
						if (myDinos.length > 0) {
							setIsLoading(false);
							return router.push(pathname);
						}

						// - New user, go to new.
						if (myDinos.length === 0) {
							setIsLoading(false);
							return router.push(PAGES.new);
						}
					}
				}

				// - If wallet is disconnected.
			} else if (isDisconnected) {
				setIsLoading(false);
				return router.push(PAGES.login);
			}
		}
	}, [ready, isConnected, q.qMyDinos.isLoading, pathname]);

	return (
		<Box
			className={cn(
				"transition-all duration-500 bg-background fixed z-100 h-dvh w-dvw top-0 left-0 pointer-events-auto",
				!isLoading && "opacity-0 pointer-events-none",
			)}
		>
			<Box className="size-full flex items-center justify-center">
				<H1>Loading ...</H1>
			</Box>
		</Box>
	);
};

const Loader = (props: LoaderProps) => {
	return (
		<Box className="relative">
			<Box>{props.children}</Box>

			<LoaderContent />
		</Box>
	);
};

export { Loader };
