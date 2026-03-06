import { useRouter as useRouterPrimitive } from "next/navigation";

const useRouter = () => {
	const router = useRouterPrimitive();

	return {
		...router,
		push: (path: string) => {
			console.log("InApp Redirect: -> ", path);
			router.push(path);
		},
	};
};

export { useRouter };
