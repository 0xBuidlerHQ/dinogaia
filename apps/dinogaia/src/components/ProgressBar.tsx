"use client";

import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { H5 } from "@0xbuidlerhq/ui/system/base/typography";

type ProgressBarProps = {
	value: number;
	label: string;
	max?: number;
	showValue?: boolean;
	size?: "sm" | "md" | "lg";
	colors?: {
		track?: string;
		fill?: string;
		sheen?: string;
	};
	className?: string;
};

const sizeClasses = {
	sm: "h-2",
	md: "h-3",
	lg: "h-4",
} as const;

const ProgressBar = ({
	value,
	max = 100,
	label,
	showValue = true,
	size = "md",
	colors,
	className,
}: ProgressBarProps) => {
	const safeMax = max > 0 ? max : 1;
	const pct = Math.min(100, Math.max(0, (value / safeMax) * 100));
	const pctLabel = Math.round(pct);

	return (
		<div className={cn("w-full", className)}>
			{(label || showValue) && (
				<div className="mb-1 flex items-center justify-between tracking-tighter opacity-50">
					<H5 className="tracking-tight font-syne font-semibold">{label}</H5>

					{showValue && (
						<H5 className="tracking-tight">
							{Math.round(value)}/{Math.round(safeMax)}
						</H5>
					)}
				</div>
			)}

			<div
				className={cn("relative overflow-hidden border border-accent/40", sizeClasses[size])}
				role="progressbar"
				aria-valuenow={Math.round(value)}
				aria-valuemin={0}
				aria-valuemax={Math.round(safeMax)}
				style={{
					background: colors?.track ?? "rgba(15, 23, 42, 0.35)",
				}}
			>
				<div
					className="absolute inset-y-0 left-0 overflow-hidden transition-[width] duration-500 ease-out"
					style={{
						width: `${pct}%`,
						backgroundImage:
							colors?.fill ??
							"linear-gradient(90deg, rgba(52, 211, 153, 1) 0%, rgba(34, 211, 238, 1) 55%, rgba(251, 191, 36, 1) 100%)",
					}}
				>
					<div
						className="absolute inset-0 animate-progress-sheen"
						style={{
							backgroundImage:
								colors?.sheen ??
								"linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.6) 45%, transparent 55%)",
						}}
					/>
				</div>
				{pct > 5 && (
					<div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-semibold uppercase tracking-widest text-black/80">
						{pctLabel}%
					</div>
				)}
			</div>
			<style jsx>{`
				@keyframes progressSheen {
					0% {
						transform: translateX(-120%);
					}
					100% {
						transform: translateX(120%);
					}
				}
				.animate-progress-sheen {
					animation: progressSheen 2.6s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
};

export default ProgressBar;
