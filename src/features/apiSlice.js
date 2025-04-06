import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

export const productsApi  =  createApi({
        reducerPath: "productApi",
        baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
        endpoints: (builder) => ({
            getAllProducts: builder.query({
                query: ({limit = 200, skip = 0} = {}) => `products?limit=${limit}&skip=${skip}`,
            }),
            getProduct:builder.query({
                query: (product) => `products/search?q=${product}`
             }),
             getWomenDress: builder.query({
                query:({limit = 100, skip = 0} = {}) => `/products/category/womens-dresses?limit=${limit}&skip=${skip}`
             }),
             getWomenShoes: builder.query({
                query:({limit = 100, skip = 0} = {}) => `/products/category/womens-shoes?limit=${limit}&skip=${skip}`
             }), 
             getWomenBags: builder.query({
                query:({limit = 100, skip = 0} = {}) => `/products/category/womens-bags?limit=${limit}&skip=${skip}`
             }), 
             getWomenJewellery: builder.query({
                query:({limit = 100, skip = 0} = {}) => `/products/category/womens-jewellery?limit=${limit}&skip=${skip}`
             }), 
             getMensShirts: builder.query({
                query:({limit = 100, skip = 0} = {}) => `products/category/mens-shirts?limit=${limit}&skip=${skip}`
             }), 
             getMensShoes: builder.query({
                query:({limit = 100, skip = 0} = {}) => `products/category/mens-shoes?limit=${limit}&skip=${skip}`
             }), 
             getMensWatches: builder.query({
                query:({limit = 100, skip = 0} = {}) => `products/category/mens-watches?limit=${limit}&skip=${skip}`
             }), 
             getFragrances: builder.query({
                query:({limit = 100, skip = 0} = {}) => `products/category/fragrances?limit=${limit}&skip=${skip}`
             }), 
             getSunglasses: builder.query({
                query:({limit = 100, skip = 0} = {}) => `products/category/sunglasses?limit=${limit}&skip=${skip}`
             }), 
             getSmartphones: builder.query({
                query:({limit = 100, skip = 0} = {}) => `products/category/smartphones?limit=${limit}&skip=${skip}`
             }), 
             getLaptops: builder.query({
                query:({limit = 100, skip = 0} = {}) => `products/category/laptops?limit=${limit}&skip=${skip}`
             }), 
        })
});
export const {useGetAllProductsQuery, useGetProductQuery, useGetWomenDressQuery, useGetWomenShoesQuery, useGetWomenBagsQuery, useGetWomenJewelleryQuery, useGetMensShirtsQuery, useGetMensShoesQuery, useGetMensWatchesQuery, useGetFragrancesQuery, useGetSunglassesQuery, useGetSmartphonesQuery, useGetLaptopsQuery} = productsApi;
