import { Outlet, createBrowserRouter } from 'react-router-dom';
import { appRouter } from './screens/appRouter';

export const globalRouter = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [...appRouter],
  },
]);
