"use client";

import { PAGES } from "@config/pages";
import { useWeb3 } from "@providers/web3";
import { useRouter } from "next/navigation";
import { type PropsWithChildren, useEffect } from "react";

type Props = PropsWithChildren;
const AuthComponent = (props: Props) => {
	const { isConnected, isDisconnected } = useWeb3();
	const router = useRouter();

	useEffect(() => {
		return router.push(PAGES.homepage);
	}, [isDisconnected]);

	if (isConnected) return props.children;
	return null;
};

export { AuthComponent };
