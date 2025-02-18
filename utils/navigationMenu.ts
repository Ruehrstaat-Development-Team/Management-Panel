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
			title: "Home",
			icon: LucideHome,
			location: { name: "index" },
			urlCompare: "/",
		},
		{
			title: "Carrier",
			icon: LucideOctagonAlert,
			location: { name: "carrier" },
			urlCompare: "/carrier",
		},
		{
			title: "Information Database",
			icon: LucideFileArchive,
			location: { name: "information" },
			urlCompare: "/information",
		},
		{
			title: "Commanders",
			icon: LucideUsers,
			location: { name: "commanders" },
			urlCompare: "/commanders",
		},
    {
      title: "Gallery",
      icon: LucideImages,
      location: { name: "gallery" },
      urlCompare: "/gallery",
    }
	];
	return items;
};
