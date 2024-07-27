import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="py-3 border-b px-6 flex items-center justify-between">
      <h3>Hello Welcome</h3>
      <Avatar className="h-12 w-12 rounded-full overflow-hidden">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default TopNavbar;
