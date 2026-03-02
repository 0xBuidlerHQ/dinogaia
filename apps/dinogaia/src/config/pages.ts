const APP = "/app/";

const PAGES = {
	homepage: "/",

	app: {
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
	new: "/new",
} as const;
const allPages = Object.values(PAGES);

export { PAGES, allPages };
