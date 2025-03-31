import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { productsApi } from "../features/apiSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer, // RTK Query reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware), //RTK Query middleware
});

export default store;
