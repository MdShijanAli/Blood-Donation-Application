// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from "react-router-dom";



import HomePage from '../Pages/HomePage';
import ProtectRoute from './ProtectRoute/ProtectRoute';
import Main from './../layout/Main';
import Login from '../Login/Login';
import Register from '../Login/Register';
import ErrorPage from '../components/ErrorPage';
import ResetPass from '../Login/ResetPass';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
           
          {
            path: '/',
            element: <HomePage />
        },
            
            {
                path: '/login',
                element: <ProtectRoute><Login /></ProtectRoute>
            },
            {
                path: '/register',
                element: <ProtectRoute><Register /></ProtectRoute>
            },
            {
                path: '*',
                element: <ErrorPage />
            },

           
            {
                path: '/reset-password',
                element: <ProtectRoute><ResetPass /></ProtectRoute>
            },
           
        ]
    }
])