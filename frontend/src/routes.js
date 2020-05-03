import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/UserDashboard';

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
        path: '/gallery',
        exact: true,
        component: lazy(() => import('src/views/GalleryPage')),
      },
      {
        path: '/gallery/cardname',
        exact: true,
        component: lazy(() => import('src/views/CurrentReportPage')),
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
      },
      {
        path: '/reportentry/oneppr',
        exact: true,
        component: lazy(() => import('src/views/ReportEntryPage/OnePPRReport')),
      },
      {
        path: '/aboutus',
        exact: true,
        component: lazy(() => import('src/views/AboutUsPage')),
      }
    ]
  }
];
