import { cn } from "@0xbuidlerhq/ui/shadcn/lib/utils";
import { ButtonBase } from "@0xbuidlerhq/ui/system/buttons/ButtonBase";
import type { ComponentProps } from "react";

type ButtonDefaultProps = ComponentProps<typeof ButtonBase>;
const ButtonDefault = (props: ButtonDefaultProps) => {
	return (
		<ButtonBase
			{...props}
			className={cn(
				"px-2 py-1 bg-brand/25 border border-brand/50 text-brand uppercase transition-all hover:border-brand/25 hover:bg-brand/20",
				props.disabled && "opacity-50 pointer-events-none",
			)}
		/>
	);
};

export { ButtonDefault };
