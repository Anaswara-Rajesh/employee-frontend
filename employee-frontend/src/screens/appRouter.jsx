import { loginRouter } from "./login/router";
import { dashboardRouter } from "./dashboard/router";
import { employeeRouter } from "./employee/router";

export const appRouter = [
  ...loginRouter,
  ...dashboardRouter,
  ...employeeRouter,
];
