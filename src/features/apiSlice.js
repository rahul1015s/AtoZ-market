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
             })
        })
});
export const {useGetAllProductsQuery, useGetProductQuery} = productsApi;