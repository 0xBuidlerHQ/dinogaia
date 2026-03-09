"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { Box } from "@0xbuidlerhq/ui/system/base/box";
import Link from "next/link";
import type { MouseEventHandler } from "react";

interface ButtonBaseProps extends React.HTMLAttributes<HTMLButtonElement> {
	href?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	external?: boolean;
	disabled?: boolean;
}

const ButtonBase = (props: ButtonBaseProps) => {
	const { children, onClick, href, className, external, disabled } = props;

	if (onClick)
		return (
			<button
				type="button"
				className={cn(
					"group relative hover:cursor-pointer",
					disabled && "opacity-10",
					className,
					disabled && "pointer-events-none!",
				)}
				onClick={onClick}
			>
				{children}
			</button>
		);

	return (
		<Link
			//
			target={external ? "_blank" : undefined}
			href={href ?? "https://google.com"}
			className={cn("", disabled && "pointer-events-none!")}
		>
			<Box
				className={cn("group relative hover:cursor-pointer", disabled && "opacity-10", className)}
			>
				{children}
			</Box>
		</Link>
	);
};

export { ButtonBase };
