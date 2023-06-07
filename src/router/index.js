import React from 'react';
import Header from '../components/header';
import {createBrowserRouter, Outlet} from 'react-router-dom';
import Main from '../routes/main';
import About from "../routes/about";

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
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
])

export default GlobalRouter;