import React from 'react';
import { useGetWomenDressQuery } from '../features/apiSlice';

function WomenDress() {
  const {
    data: womenDress,
    error,
    isError,
    isLoading,
  } = useGetWomenDressQuery({ limit: 100, skip: 0 });

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <div>Error: {error.toString()}</div>;

 // Creating a fake large list by repeating the original 5 women dress products 20 times
const loopWomenDress = Array.from({ length: 20 }, (_, i) => 
    // For each repetition, we're mapping through the original 5 products
    womenDress.products.map(product => ({
      // Copy all original product properties
      ...product,
      // Give each repeated product a unique id to avoid key duplication issues in React
      id: i * womenDress.products.length + product.id,
    }))
  ).flat(); // This 'flat()' removes the nested arrays and combines all into one single array

    // Array.from({ length: 20 }, (_, i) => ...)
    // It creates a new array of 20 empty elements.

    // _ is a placeholder for the unused value.

    // i is the index (0 to 19).

    // So it runs the inner function 20 times.

    // repeating 5 products 20 times = 100 products total, and flat() ensures they're all in a single-level array, not nested inside 20 arrays.



  return (
    <div className="p-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loopWomenDress.map((product) => (
          <li
            key={product.id}
            className="bg-white overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
          >
            <div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="p-4">
              <h1 className="text-lg font-semibold">{product.title}</h1>
              <span className="text-sm text-gray-500">{product.brand}</span>
              <p className="mt-2 text-sm">{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WomenDress;
