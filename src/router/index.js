import React from 'react';
import Header from '../components/header';
import {createBrowserRouter, Outlet} from 'react-router-dom';
import Main from '../routes/main';

export const GlobalRouter = createBrowserRouter([
    {
        path: "/",
        element: (
          <>
              <Header />
              <Outlet />
          </>
        ),
        children: [
            {
                path: "/",
                element: <Main />
            }
        ]
    },
])

export default GlobalRouter;