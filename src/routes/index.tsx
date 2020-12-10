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
  isMainMenuItem: boolean;
  main: any;
  isCurrent: 'true' | 'false' | 'child';
  title: string;
  // childs?: any;
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
    isMainMenuItem: true,
    title: 'TimePlace',
    isCurrent: 'true',
  },
  'Sign in': {
    pathname: '/auth',
    exact: false,
    strict: false,
    main: () => <Auth />,
    isMainMenuItem: true,
    title: 'Authorization',
    isCurrent: 'false',
    childs: {
      'Sign up': {
        pathname: '/auth/register',
        exact: true,
        strict: true,
        main: () => <Registration />,
        isMainMenuItem: true,
        title: 'Registration',
        isCurrent: 'false',
      },
    },
  },
  Events: {
    pathname: '/events',
    exact: false,
    strict: false,
    main: () => <Events />,
    isMainMenuItem: true,
    title: 'Events',
    isCurrent: 'false',
  },
}

export default AppRoutes
