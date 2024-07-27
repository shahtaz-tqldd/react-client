import {
  LayoutDashboard,
  LayoutDashboardIcon,
  ListOrdered,
  Settings2,
  User,
  User2Icon,
} from "lucide-react";

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

export const accountMenuLinks = [
  {
    id: 1,
    title: "Profile",
    link: "/profile",
    icon: User2Icon,
  },
  {
    id: 2,
    title: "Settings",
    link: "/settings",
    icon: Settings2,
  },
  {
    id: 3,
    title: "Dashboard",
    link: "/",
    icon: LayoutDashboardIcon,
  },
];

// demo data
export const user = {
  name: "Shahtaz Rahman",
  role: "Admin",
  email: "shahtaz67@gmail.com",
  image: {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg",
  },
};
