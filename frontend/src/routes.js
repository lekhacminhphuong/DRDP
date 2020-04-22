import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/UserDashboard';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/home',
        exact: true,
        component: lazy(() => import('src/views/OverviewPage')),
      },
      {
        path: '/data',
        exact: true,
        component: lazy(() => import('src/views/DataPage')),
      },
      {
        path: '/gallery',
        exact: true,
        component: lazy(() => import('src/views/GalleryPage')),
      },
    ],
  },
];
