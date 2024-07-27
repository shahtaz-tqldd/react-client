import { Link, useLocation } from "react-router-dom";
import { sideMenuItems } from "./common.ts";
import { LogOut } from "lucide-react";
import Logo from "../logo/index.tsx";

const SideNavbar = () => {
  const { pathname } = useLocation();

  const isActive = (link = "") => {
    return pathname === link;
  };

  const handleLogout = () => {
    console.log("logged out");
  };
  return (
    <div className="bg-black/90 h-screen py-5 px-4">
      <Logo lg className="ml-4" />
      <div className="flb flex-col h-[86%] mt-12">
        <div className="w-full">
          {sideMenuItems.map(({ title, link, icon: Icon }, index) => (
            <Link
              key={index}
              to={link}
              className={`flex items-center gap-2 p-2.5 rounded group tr ${
                isActive(link)
                  ? "bg-primary"
                  : "text-white/65 hover:bg-white/5 hover:text-white/85"
              }`}
            >
              <Icon className="h-4" />
              <span
                className={
                  isActive(link)
                    ? "translate-x-1"
                    : "group-hover:translate-x-1 tr"
                }
              >
                {title}
              </span>
            </Link>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="flc text-red-500 hover:text-red-400 group cursor-pointer tr"
        >
          <LogOut className="rotate-180 p-1 -translate-x-2 group-hover:-translate-x-3 tr" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
