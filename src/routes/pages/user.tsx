import React from 'react';
import { RouteObject } from 'react-router-dom';

const User = React.lazy(() => import('@/pages/User'));
const UserFirst = React.lazy(() => import('@/pages/UserFirst'));

const userRoutes: RouteObject[] = [
  {
    path: '/user',
    element: <User />,
    children: [
      {
        path: 'userFirst',
        element: <UserFirst />,
      },
    ],
  },
];

export default userRoutes;
