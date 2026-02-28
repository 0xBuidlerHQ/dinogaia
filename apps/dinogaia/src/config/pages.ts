const PAGES = {
	homepage: "/",
	cave: "/cave",
	shop: "/shop",
	//
	myDino: "/",
	quests: "/quests",
	hunt: "/hunt",
	casino: "/casino",
	fight: "/fight",
	jobs: "/jobs",
	auctions: "/auctions",
	bank: "/bank",
	stats: "/stats",

	ranking: "/ranking",

	login: "/login",
	setup: "/setup",
} as const;
const allPages = Object.values(PAGES);

export { PAGES, allPages };
