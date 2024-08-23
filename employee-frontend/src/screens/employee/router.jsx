import EmployeeList from './list/EmployeeList';
import DashboardLayout from '../../components/layout/DashboardLayout'

export const employeeRouter = [
  {
    path: "/employee",
    element: <DashboardLayout />, 
    children: [
      {
        path: "",
        element: <EmployeeList />,
      },
    ],
  },
];
