"use client";

import { PAGES } from "@config/pages";
import { useRouter } from "@hooks/useRouter";
import { useWeb3 } from "@providers/web3";
import React, { type PropsWithChildren, useEffect } from "react";

type AuthComponentProps = PropsWithChildren;
const AuthComponent = (props: AuthComponentProps) => {
	const { isConnected, ready, isDisconnected } = useWeb3();
	const router = useRouter();

	useEffect(() => {
		if (!ready) return;
		if (isDisconnected) return router.push(PAGES.login);
	}, [ready, isDisconnected]);

	if (isConnected && ready) return props.children;
	return null;
};

const withAuth = <P extends Record<string, unknown>>(
	Component: (props: P) => React.JSX.Element,
) => {
	const Wrapped = (props: P) => (
		<AuthComponent>
			<Component {...props} />
		</AuthComponent>
	);
	Wrapped.displayName = `withAuth(${Component.name ?? "Component"})`;
	return Wrapped;
};

export { AuthComponent, withAuth };
