import React from "react";


import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/apiSlice";

function ProductList() {
  const {
    data: allProductsData,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery("Laptop");
  console.log(allProductsData);
  console.log(singleProductData);

  if (isLoading) return <h1>Loading..............</h1>;
  if(isError) return<div>Error: {error.toString()}</div>

  return (
    <div>
    
      <h1>Data</h1>
    </div>


  );
}

export default ProductList;
