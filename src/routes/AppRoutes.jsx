import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App'; 
import Test from '../components/Test'; 
import ProductList from '../pages/productList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/test',
    element: <Test />, 
  },
  {path: '/products', element: <ProductList />}
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />; 
}
