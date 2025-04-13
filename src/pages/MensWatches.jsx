import React from "react";
import { useGetMensWatchesQuery } from "../features/apiSlice";
import { repeatProducts } from "../utils/repeatProducts";
import "../styles/productCard.css";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";

function MensWatches() {
  const dispatch = useDispatch();

  const {
    data: mensWatches,
    error,
    isError,
    isLoading,
  } = useGetMensWatchesQuery({ limit: 100, skip: 0 });

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <div>Error: {error.toString()}</div>;

  const loopMensWatches = repeatProducts(mensWatches.products);
  console.log(mensWatches);

  return (
    <div className="p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loopMensWatches.map((product) => (
          <li key={product.id} className="product-card">
            <div className="product-img-box">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
            </div>

            <div className="product-info">
              <h1 className="product-title">{product.title}</h1>
              <span className="product-brand">{product.brand}</span>
              <p className="product-desc">{product.description}</p>

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
                <span
                  className={`availability-badge ${
                    product.stock > 0 ? "in-stock" : "out-of-stock"
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>

                <span className="rating">⭐ {product.rating}</span>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MensWatches;
