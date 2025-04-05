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
        })
});
export const {useGetAllProductsQuery, useGetProductQuery, useGetWomenDressQuery} = productsApi;