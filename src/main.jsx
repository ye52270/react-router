import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './router/root';
import Intro from './router/intro';
import Address, { loader as addressLoader } from './router/address';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/intro',
        element: <Intro />,
      },
      {
        path: '/address/:locationInfo',
        element: <Address />,
        loader: addressLoader,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
