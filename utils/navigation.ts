export default function () {
  return {
    IsExpanded: ref(false),
    Destinations: [
      new NavigationItem("Home", "/", "home"),
      new NavigationItem("Carrier", "/carrier", "handyman"),
      new NavigationItem("Commander", "/commander", "group"),
      new NavigationItem("Management", "/management", "inventory"),
    ],
  };
}

class NavigationItem {
  readonly Name: string;
  readonly Path: string;
  readonly Icon: string;
  readonly NavigationItems: NavigationItem[] | null;
  Badge: number | null;

  constructor(
    name: string,
    path: string,
    icon: string,
    badge: number | null = null,
    navigationItems: NavigationItem[] | null = null
  ) {
    this.Name = name;
    this.Path = path;
    this.Icon = icon;
    this.Badge = badge;
    this.NavigationItems = navigationItems;
  }
}
