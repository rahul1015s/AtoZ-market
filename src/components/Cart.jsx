import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItems } from '../redux/cartSlice';
import { BsCart4 } from "react-icons/bs";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleRemove = (id) => {
    dispatch(removeItems(id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log(cartItems);

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      <h2 className='text-2xl font-bold flex items-center gap-2'>
        <BsCart4 size={30} /> Your Cart
      </h2>

      <p className='mt-2 text-lg'>Total Items: {totalQuantity}</p>
      <h1 className='text-xl font-semibold mt-2'>Total Price: ${totalPrice.toFixed(2)}</h1>

      {cartItems.length === 0 ? (
        <p className='text-gray-500 mt-4'>Your cart is empty.</p>
      ) : (
        <ul className='mt-4 space-y-4'>
          {cartItems.map((item) => (
            <li key={item.id} className='flex items-center gap-4 border p-4 rounded'>
              <img
                src={item.thumbnail}
                alt={item.title}
                className='w-20 h-20 object-cover'
              />

              <div className='flex-1'>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.brand}</p>
                <p className='text-sm'>${item.price} x {item.quantity}</p>
                <p className='text-sm font-medium'>
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className='bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition'
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
