const APP = "/app";

const PAGES = {
	homepage: "/",

	app: {
		new: `${APP}/new`,
		//
		homepage: APP,
		cave: `${APP}/cave`,
		shop: `${APP}/shop`,
		//
		dino: `${APP}/dino`,
		quests: `${APP}/quests`,
		hunt: `${APP}/hunt`,
		casino: `${APP}/casino`,
		fight: `${APP}/fight`,
		jobs: `${APP}/jobs`,
		auctions: `${APP}/auction`,
		bank: `${APP}/bank`,
		stats: `${APP}/stats`,

		ranking: `${APP}/ranking`,
	},

	login: "/login",
} as const;
const allPages = Object.values(PAGES);

const isPathApp = (pathname: string) => {
	return pathname.includes(APP);
};

export { PAGES, allPages, isPathApp };
