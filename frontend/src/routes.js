import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/UserDashboard';

export default [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('src/views/OverviewPage'))
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/login',
        exact: true,
        component: lazy(() => import('src/views/LoginPage')),
      },
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
        path: '/totalserved',
        exact: true,
        component: lazy(() => import('src/views/CurrentReportPage')),
      },
      {
        path: '/gallery/ethnicity',
        exact: true,
        component: lazy(() => import('src/views/EthnicityReport1')),
      },
      {
        path: '/gallery/ethnicity2',
        exact: true,
        component: lazy(() => import('src/views/EthnicityReport2')),
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
        path: '/reportentry/confirmation',
        exact: true,
        component: lazy(() => import('src/views/ReportEntryPage/OnePPRReport/EntryConfirmation')),
      },
      {
        path: '/reportentry/success',
        exact: true,
        component: lazy(() => import('src/views/ReportEntryPage/OnePPRReport/EntrySuccess')),
      },
      {
        path: '/aboutus',
        exact: true,
        component: lazy(() => import('src/views/AboutUsPage')),
      },
      {
        path: '/profile',
        exact: true,
        component: lazy(() => import('src/views/ProfilePage')),
      }
    ]
  }
];
