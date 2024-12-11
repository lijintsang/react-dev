import React from 'react';
import { RouteObject } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/Home'));
const HomeFirst = React.lazy(() => import('@/pages/HomeFirst'));

const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/homeFirst',
        element: <HomeFirst />,
      },
    ],
  },
];

export default homeRoutes;
