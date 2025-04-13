import React, { use } from 'react'
import { useSearchParams } from 'react-router-dom'  // to read URL query
import { useGetProductQuery } from '../features/apiSlice'  // RTK Query to fetch products
import '../styles/productCard.css'
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";


function SearchResult() {

    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();// get query parameters from URL
    const query = searchParams.get("q"); // extract ?q= from URL

    //fetch products base on search query using RTK qyeryy
    const {data, isError, isLoading} = useGetProductQuery(query);

    if(isLoading) return <p className='p-4'>Loading....</p>

    if(isError) return <p className='p-4 text-red-500'>Something went wrong.</p>

    return (
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Search Results for: "{query}"</h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.products?.map((product) => (
              <div key={product.id} className="product-card">
                {/* Product Image */}
                <div className="product-img-box">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
    
                {/* Product Info */}
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-brand">{product.brand}</p>
                  <p className="product-desc">{product.description.slice(0, 60)}...</p>
    
                  <div className="product-price-box">
                <span className="line-through text-gray-400">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
                <span className="text-green-700 font-bold">${product.price}</span>

                <span className="product-discount">{product.discountPercentage}% off</span>
              </div>
    
                  <div className="product-meta">
                    {/* Stock status */}
                    <span className={`availability-badge ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                      {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
    
                    {/* Rating */}
                    <span className="rating">⭐ {product.rating}</span>
    
                    {/* Shipping info (if any static message) */}
                    <span className="shipping">{product.shippingInformation}</span>
                  </div>
    
                  
                  <button
                                  className="add-to-cart-btn"
                                  disabled={product.stock <= 0}
                                  onClick={() => dispatch(addItems({ ...product, quantity: 1 }))}
                                >
                                  Add to Cart
                                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default SearchResult
