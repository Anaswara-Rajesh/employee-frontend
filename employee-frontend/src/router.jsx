import { Outlet, createBrowserRouter, Navigate } from 'react-router-dom';
import { appRouter } from './screens/appRouter';

export const globalRouter = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      ...appRouter,
      {
        path: '/',
        element: <Navigate to="/login" replace />
      },
    ],
  },
]);
