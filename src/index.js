import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom';
import Home from './pages';
import About from './pages/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
