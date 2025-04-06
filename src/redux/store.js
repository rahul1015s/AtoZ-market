import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { productsApi } from "../features/apiSlice";


//save to localStorage
const saveCart = (state) => {
    try{
        const cartData = JSON.stringify(state.cart); //convert cart to string
        localStorage.setItem("cart",cartData); //save to localStorage

    } catch (error) {
        console.log("Error saving cart:", error);
    }
};


//load cart from local storage

const localCart = () => {
    try{
        const savedCart = localStorage.getItem("cart"); // get saved cart string
        return savedCart ? JSON.parse(savedCart) : undefined; //  CONERT TO OBJECT
    } catch(error) {
        console.log("Error loading cart:", error);
    }
}


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer, // RTK Query reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware), //RTK Query middleware
    preloadedState: {
        cart: localCart(), // load cart when app starts
    }
});

//save cart on every changes 
store.subscribe(() => {
    saveCart(store.getState());
});

export default store;
