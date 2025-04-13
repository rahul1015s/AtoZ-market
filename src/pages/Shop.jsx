import React from "react";

function Shop() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 px-4 py-8 shadow-inner">
  <div className="mb-6 animate-bounce">
    <div className="rounded-full bg-white p-6 shadow-lg drop-shadow-lg">
      🎁
    </div>
  </div>
  
  <div className="max-w-2xl text-center space-y-4">
    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
      Exciting New Arrivals 
      <span className="ml-2 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
        Coming Soon!
      </span>
    </h2>
    
    <p className="text-lg text-gray-600 md:text-xl">
      While we prepare the launch, explore our collection using<br />
      <span className="mt-2 inline-block rounded-lg bg-white px-4 py-2 font-medium text-gray-700 shadow-md">
        🔍 Search bar above
      </span>
    </p>
  </div>

  <div className="mt-8 flex space-x-2">
    <div className="h-2 w-2 animate-pulse rounded-full bg-pink-400"></div>
    <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400 delay-100"></div>
    <div className="h-2 w-2 animate-pulse rounded-full bg-pink-400 delay-200"></div>
  </div>
</div>
  );
}

export default Shop;
