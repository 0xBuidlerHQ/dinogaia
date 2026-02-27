"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import { PAGES } from "@config/pages";
import { useWeb3 } from "@providers/web3";
import { useLoader } from "@stores/useStore";
import { useRouter } from "next/navigation";
import { type PropsWithChildren, useEffect } from "react";

type LoaderProps = PropsWithChildren;

const LoaderContent = () => {
	const { setIsLoading, isLoading } = useLoader();
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
			console.log("la");
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	const { isDisconnected } = useWeb3();

	/**
	 * @dev Handle disconnection.
	 */
	useEffect(() => {
		if (isDisconnected) {
			console.log("disconnected");

			return router.push(PAGES.homepage);
		}
	}, [isDisconnected]);

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
