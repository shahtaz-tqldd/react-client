import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import SideNavbar from "../components/navbar/side-navbar";
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/navbar/top-navbar";

const DashboardLayout = () => {
  return (
    <div className="h-screen w-[100vw]">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={16}
          className="min-w-[80px] max-w-[400px] text-white"
        >
          <SideNavbar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={84}>
          <TopNavbar />
          <div className="p-4">
            <Outlet />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default DashboardLayout;
