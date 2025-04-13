import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductList from "./pages/ProductList.jsx";

import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import WomenDress from "./pages/WomenDress.jsx";
import HomePage from "./Home/HomePage.jsx";
import WomenShoes from "./pages/WomenShoes.jsx";
import WomenBags from "./pages/WomenBags.jsx";
import WomensJewellery from "./pages/WomensJewellery.jsx";
import MensShirts from "./pages/MensShirts.jsx";
import MensShoes from "./pages/MensShoes.jsx";
import MensWatches from "./pages/MensWatches.jsx";
import Fragrances from "./pages/Fragrances.jsx";
import Sunglasses from "./pages/Sunglasses.jsx";
import SmartPhones from "./pages/SmartPhones.jsx";
import Laptops from "./pages/Laptops.jsx";
import Cart from "./components/Cart.jsx";
import SearchResult from "./components/SearchResult.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import LoginSignup from "./components/LoginSignup.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "women-dress",
        element: <WomenDress />,
      },
      { path: "women-shoes", element: <WomenShoes /> },
      { path: "women-bags", element: <WomenBags /> },
      { path: "womens-jewellery", element: <WomensJewellery /> },
      { path: "mens-shirts", element: <MensShirts /> },
      { path: "mens-shoes", element: <MensShoes /> },
      { path: "mens-watches", element: <MensWatches /> },
      { path: "fragrances", element: <Fragrances /> },
      { path: "sunglasses", element: <Sunglasses /> },
      { path: "smartphones", element: <SmartPhones /> },
      { path: "laptops", element: <Laptops /> },
      { path: "cart", element: (<ProtectedRoute><Cart /> </ProtectedRoute>)},
      { path: "search", element: <SearchResult /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {path: 'login', element: <LoginSignup />},
      {path: 'profile', element: <Profile />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </Provider>
);
