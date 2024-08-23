import DashboardList from "./list/DashboardList";
import DashboardLayout from '../../components/layout/DashboardLayout'


export const dashboardRouter = [
  {
    path: "/dashboard",
    element: <DashboardLayout />, 
    children: [
      {
        path: "",
        element: <DashboardList />,
      },
    ],
  },
];
