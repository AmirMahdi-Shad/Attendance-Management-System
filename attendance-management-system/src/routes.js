import Users from "./pages/DashboardPages/Users";
import HomePage from "./pages/DashboardPages/HomePage";
import DailyAttendance from "./pages/DashboardPages/DailyAttendance";
import InfoPage from "./pages/InfoPage/InfoPage";
import GraphPage from "./pages/DashboardPages/GraphPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/addUsers",
    element: <Users />,
  },
  {
    path: "/dailyAttendance/*",
    element: <DailyAttendance />,
  },
  {
    path: "/info",
    element: <InfoPage />,
  },
  {
    path: "/graph",
    element: <GraphPage />,
  },
];

export default routes;
