import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/UserDashboard';

const Login = lazy(() => import('src/views/LoginPage'));
const SignUp = lazy(() => import('src/views/SignUpPage'));
const Overview = lazy(() => import('src/views/OverviewPage'));
const Gallery = lazy(() => import('src/views/GalleryPage'));
const TotalServed = lazy(() => import('src/views/CurrentReportPage'));
const Ethnicity1 = lazy(() => import('src/views/EthnicityReport1'));
const Ethnicity2 = lazy(() => import('src/views/EthnicityReport2'));
const Favorites = lazy(() => import('src/views/FavoritesPage'));
const ReportEntry = lazy(() => import('src/views/ReportEntryPage'));
const ReportEntry_OnePPR = lazy(() => import('src/views/ReportEntryPage/OnePPRReport'));
const ReportEntry_Confirmation = lazy(() => import('src/views/ReportEntryPage/OnePPRReport/EntryConfirmation'));
const ReportEntry_Success = lazy(() => import('src/views/ReportEntryPage/OnePPRReport/EntrySuccess'))
const AboutUs = lazy(() => import('src/views/AboutUsPage'));
const Profile = lazy(() => import('src/views/ProfilePage'));

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
        path: '/login',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>,
      },
      {
        path: '/signup',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><SignUp /></Suspense>,
      },
      {
        path: '/overview',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><Overview /></Suspense>,
      },
      {
        path: '/DRDP',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><Overview /></Suspense>,
      },
      {
        path: '/gallery',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><Gallery /></Suspense>,
      },
      {
        path: '/gallery/totalserved',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><TotalServed /></Suspense>,
      },
      {
        path: '/gallery/ethnicity',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><Ethnicity1 /></Suspense>,
      },
      {
        path: '/gallery/ethnicity2',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><Ethnicity2 /></Suspense>,
      },
      {
        path: '/favorites',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><Favorites /></Suspense>,
      },
      {
        path: '/reportentry',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><ReportEntry /></Suspense>,
      },
      {
        path: '/reportentry/oneppr',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><ReportEntry_OnePPR /></Suspense>,
      },
      {
        path: '/reportentry/confirmation',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><ReportEntry_Confirmation /></Suspense>,
      },
      {
        path: '/reportentry/success',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><ReportEntry_Success /></Suspense>,
      },
      {
        path: '/aboutus',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><AboutUs /></Suspense>,
      },
      {
        path: '/profile',
        exact: true,
        component: () => <Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>,
      }
    ]
  }
];
