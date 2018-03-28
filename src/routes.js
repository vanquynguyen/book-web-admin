import React from 'react';
import Home from './components/Home'
import NotFound from './components/NotFound'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;