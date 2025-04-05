import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx"
import ProductList from './pages/ProductList.jsx'

import './index.css'; 
import { Provider } from 'react-redux';
import store from './redux/store.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'products', // for "/products"
        element: <ProductList />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
  
);
