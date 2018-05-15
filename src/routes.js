import React from 'react';
import Home from './components/Home';
import CategoriesListPage from './components/Categories/CategoriesListPage';
import CategoriesActionPage from './components/Categories/CategoriesActionPage';
import UsersListPage from './components/Users/UsersListPage';
import UsersActionPage from './components/Users/UsersActionPage';
import BooksListPage from './components/Books/BooksListPage';
import NotFound from './components/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/category-list',
        exact: false,
        main: () => <CategoriesListPage />
    },
    {
        path: '/category/add',
        exact: false,
        main: ({ location, history }) => <CategoriesActionPage location={location} history={history} />
    },
    {
        path: '/category/:id/edit',
        exact: false,
        main: ({ match, history }) => <CategoriesActionPage match={match} history={history} />
    },
    {
        path: '/user-list',
        exact: false,
        main: () => <UsersListPage />
    },
    {
        path: '/user/add',
        exact: false,
        main: ({ location, history }) => <UsersActionPage location={location} history={history} />
    },
    {
        path: '/book-list',
        exact: false,
        main: () => <BooksListPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;