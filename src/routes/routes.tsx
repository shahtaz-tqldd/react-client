import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard-layout";
import LandingPage from "../modules/landing";
import Drivers from "../modules/drivers";
import Reports from "../modules/reports";
import SignIn from "../modules/auth/sign-in";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/drivers",
        element: <Drivers />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);
