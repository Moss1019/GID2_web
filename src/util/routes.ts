

export interface RouteInfo {
  display: string,
  path: string,
};

const routes: RouteInfo[] = [
  {
    display: 'lists',
    path: '/items'
  },
  {
    display: 'settings',
    path: '/settings'
  },
  {
    display: 'network',
    path: '/network'
  }
];

const loginRegRoutes: RouteInfo[] = [
  {
    display: 'login',
    path: '/login'
  },
  {
    display: 'register',
    path: '/register'
  }
];

export default routes;
