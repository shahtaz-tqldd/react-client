import { LayoutDashboard, ListOrdered, User } from "lucide-react";

export const sideMenuItems = [
  {
    id: 1,
    title: "Overview",
    link: "/",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Drivers",
    link: "/drivers",
    icon: User,
  },
  {
    id: 3,
    title: "Reports",
    link: "/reports",
    icon: ListOrdered,
  },
];
