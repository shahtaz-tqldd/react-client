import { useState } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOut, ChevronDown } from "lucide-react";
import { accountMenuLinks } from "./common";

interface IUser {
  name: string;
  image?: {
    url: string;
  };
  email: string;
}

interface ProfileMenuProps {
  user: IUser;
}

export function ProfileMenu({ user }: ProfileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    console.log("logged out");
  };
  return (
    <Popover onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger asChild>
        <div className="flc gap-2.5 cursor-pointer select-none">
          <div className="h-11 w-11 rounded-full bg-primary hover:bg-primary/90 text-white hover:text-whtie center tr">
            {user?.image ? (
              <img
                src={user?.image?.url}
                className="rounded-full h-full w-full object-cover"
              />
            ) : (
              <div className="text-lg font-bold">
                {user?.name.split(" ")[0].charAt(0).toUpperCase() +
                  user?.name.split(" ")[1].charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <h3>{user?.name}</h3>
            <p className="text-sm">{user?.email}</p>
          </div>
          <ChevronDown
            className={`h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-0 mt-2 border rounded-lg border-primary/10 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="flex flex-col items-start p-2">
          {accountMenuLinks?.map((menu) => (
            <Link
              key={menu.id}
              to={menu.link}
              className="fl p-2 hover:bg-primary/10 w-full rounded tr text-black/70 hover:text-black"
            >
              <menu.icon className="h-4" />
              {menu.title}
            </Link>
          ))}
          <hr className="w-full my-2" />
          <button
            onClick={handleLogout}
            className="fl p-2 text-black/70 hover:bg-red-500/10 hover:text-red-500 w-full rounded tr"
          >
            <LogOut className="rotate-180 h-4" />
            Logout
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
