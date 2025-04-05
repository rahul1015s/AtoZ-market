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
  } = useGetAllProductsQuery({limit: 200, skip: 0});
  const { data: singleProductData } = useGetProductQuery("Laptop");
  console.log(allProductsData);
  console.log(singleProductData);

  if (isLoading) return <h1>Loading..............</h1>;
  if (isError) return <div>Error: {error.toString()}</div>;

  return (
    <>
      <div className="p-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProductsData?.products.map((product) => (
            <li
              key={product.id}
              className=" bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col ">
                <img src={product.thumbnail} alt={product.title} />
              </div>

              <div className="p-4">
                  <h1 className="lext-lg font-semibold truncate">
                    {product.title}
                  </h1>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {product.brand}
                  </span>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {product.description}
                  </p>
                  <div>
                    <span className="text-xl font-bold text-gray-900">
                      $
                      {(
                        product.price /
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}
                    </span>
                    <span className="text-sm text-red-600 line-through ">
                      {product.discountPercentage}% off
                    </span>

                    <span
                      className={`px-2 py-1 rounded ${
                        product.availabilityStatus === "In Stock"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      } `}
                    >
                      {product.availabilityStatus}
                    </span>
                    
                  </div>
              </div>

              
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
