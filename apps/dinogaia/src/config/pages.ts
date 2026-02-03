const PAGES = {
	homepage: "/",
	cave: "/cave",
	shop: "/shop",
	//
	myDino: "/my-dino",
	quests: "/quests",
	hunt: "/hunt",
	casino: "/casino",
	fight: "/fight",
	jobs: "/jobs",
	auctions: "/auctions",
	bank: "/bank",

	ranking: "/ranking",
} as const;
const allPages = Object.values(PAGES);

export { PAGES, allPages };
