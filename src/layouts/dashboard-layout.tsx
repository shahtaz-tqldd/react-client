import SideNavbar from "../components/navbar/side-navbar";
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/navbar/top-navbar";

const DashboardLayout = () => {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-[280px] fixed text-white">
        <SideNavbar />
      </div>
      <div className="ml-[280px] flex-1">
        <TopNavbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
