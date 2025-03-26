import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App'; 
import Test from '../components/Test'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/test',
    element: <Test />, 
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />; 
}
