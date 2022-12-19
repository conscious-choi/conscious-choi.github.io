import React from 'react';
import Header from '../components/header';
import {createBrowserRouter, Outlet} from 'react-router-dom';
import Rollout from '../routes/rollout';

export const GlobalRouter = createBrowserRouter([
    {
        path: "/",
        element: (
          <>
              <Header />
              <Rollout />
              <Outlet />
          </>
        ),
    },
])

export default GlobalRouter;