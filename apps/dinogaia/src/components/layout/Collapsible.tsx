"use client";

import { AnimatePresence, motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";

const COLLAPSE_VARIANTS = {
	open: { height: "auto", opacity: 1 },
	collapsed: { height: 0, opacity: 0 },
} as const;

const DEFAULT_TRANSITION: Transition = { type: "tween", duration: 0.25, ease: [0.33, 0, 0.2, 1] };

type CollapsibleProps = {
	open: boolean;
	children: ReactNode;
	className?: string;
	contentClassName?: string;
	forceMount?: boolean;
	transition?: Transition;
};

/** @dev Wraps conditional content in a height/opacity animation powered by framer motion. */
const Collapsible = (props: CollapsibleProps) => {
	const { open, children, className, contentClassName, forceMount = false, transition } = props;
	const resolvedTransition = transition ?? DEFAULT_TRANSITION;
	const shouldRender = open || forceMount;

	return (
		<div className={className}>
			<AnimatePresence initial={false} mode="wait">
				{shouldRender && (
					<motion.div
						key="collapsible-content"
						className={cn("overflow-hidden", contentClassName)}
						style={{ originY: 0 }}
						variants={COLLAPSE_VARIANTS}
						initial="collapsed"
						animate={open ? "open" : "collapsed"}
						exit="collapsed"
						transition={resolvedTransition}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export { Collapsible };
