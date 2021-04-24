

export interface RouteInfo {
    display: string,
    path: string,
};

const routes: RouteInfo[] = [
    {
        display: 'lists',
        path: '/'
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

export default routes;
