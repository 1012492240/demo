import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Users from '../pages/Users';

export const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/users',
        element: <Users />,
    },
]; 