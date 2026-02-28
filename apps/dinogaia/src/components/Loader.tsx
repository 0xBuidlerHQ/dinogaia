"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { PAGES } from "@config/pages";
import { useDinogaia } from "@providers/dinogaia";
import { useWeb3 } from "@providers/web3";
import { useLoader } from "@stores/useStore";
import { useRouter } from "next/navigation";
import { type PropsWithChildren, useEffect } from "react";

type LoaderProps = PropsWithChildren;

const LoaderContent = () => {
	const { ready, isConnected, isDisconnected } = useWeb3();
	const { q, myDinos } = useDinogaia();
	const { setIsLoading, isLoading } = useLoader();
	const router = useRouter();

	useEffect(() => {
		if (ready) {
			if (isConnected && q.qMyDinos.isSuccess) {
				if (myDinos) {
					if (myDinos.length > 0) {
						setIsLoading(false);
						return router.push(PAGES.myDino);
					}

					setIsLoading(false);
					return router.push(PAGES.setup);
				}
			}
		}
	}, [ready, isConnected, q.qMyDinos.isLoading]);

	useEffect(() => {
		if (ready) {
			if (isDisconnected) {
				setIsLoading(false);
				return router.push(PAGES.login);
			}
		}
	}, [ready, isDisconnected]);

	return (
		<Box
			className={cn(
				"transition-all duration-500 bg-background absolute z-100 size-full top-0 left-0 pointer-events-auto",
				!isLoading && "opacity-0 pointer-events-none",
			)}
		>
			Loading
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
