import React from 'react';
import Home from "./home";
import Auth from "./auth";
import Registration from "../features/auth/regForm";
import Events from "./events";

// const main: () => <Home />

export interface AppRoute {
  pathname: string;
  exact: boolean;
  strict: boolean;
  main: any;
  isCurrent: boolean;
  title: string;
  childs?: AppRoutes;
}
export interface AppRoutes {
  [key: string]: AppRoute;
}

const AppRoutes: AppRoutes = {
  Home: {
    pathname: '/',
    exact: true,
    strict: false,
    main: () => <Home />,
    title: 'TimePlace',
    isCurrent: true,
  },
  'Sign in': {
    pathname: '/auth',
    exact: false,
    strict: false,
    main: () => <Auth />,
    title: 'Authorization',
    isCurrent: false,
    childs: {
      'Sign up': {
        pathname: '/auth/register',
        exact: true,
        strict: true,
        main: () => <Registration />,
        title: 'Registration',
        isCurrent: false,
      },
    },
  },
  Events: {
    pathname: '/events',
    exact: false,
    strict: false,
    main: () => <Events />,
    title: 'Events',
    isCurrent: false,
  },
}

export default AppRoutes
