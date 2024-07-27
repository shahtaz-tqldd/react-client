import Greetings from "../../lib/makeGreetings";
import { ProfileMenu } from "./profile-menu";
import { user } from "./common";

const TopNavbar = () => {
  return (
    <div className="py-3 px-6 flex items-center justify-between bg-primary/5">
      <Greetings name={user.name} />
      <ProfileMenu user={user} />
    </div>
  );
};

export default TopNavbar;
