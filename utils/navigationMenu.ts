import {
	LucideFileArchive,
	LucideHome,
	LucideImages,
	LucideOctagonAlert,
	LucideUsers,
} from "lucide-vue-next";

export default () => {
	const items: SidebarMenuItem[] = [
		{
			title: "layout-default.menu.home",
			icon: LucideHome,
			location: { name: "index" },
			urlCompare: "index",
		},
		{
			title: "layout-default.menu.carrier",
			icon: LucideOctagonAlert,
			location: { name: "carrier" },
			urlCompare: "carrier",
		},
		{
			title: "layout-default.menu.information",
			icon: LucideFileArchive,
			location: { name: "information" },
			urlCompare: "information",
		},
		{
			title: "layout-default.menu.commanders",
			icon: LucideUsers,
			location: { name: "commanders" },
			urlCompare: "commanders",
		},
		{
			title: "layout-default.menu.gallery",
			icon: LucideImages,
			location: { name: "gallery" },
			urlCompare: "gallery",
		},
	];
	return items;
};
