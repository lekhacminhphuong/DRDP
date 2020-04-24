import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/UserDashboard';
import DataPage from './views/DataPage';


export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/overview" />
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/overview',
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
      {
        path: '/favorites',
        exact: true,
        component: lazy(() => import('src/views/FavoritesPage')),
      },
      {
        path: '/reportentry',
        exact: true,
        component: lazy(() => import('src/views/ReportEntryPage')),
      }
    ],
  },
];
