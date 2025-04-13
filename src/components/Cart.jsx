import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItems } from '../redux/cartSlice';
import { BsCart4, BsCartX, BsTrash } from "react-icons/bs";

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
    <div className='p-6 m-4 max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-lg'>
      <div className='flex items-center gap-3 mb-6'>
        <BsCart4 className='text-blue-600 w-8 h-8' />
        <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Your Shopping Cart
        </h2>
      </div>
  
      <div className='flex gap-4 mb-6'>
        <div className='bg-white p-4 rounded-lg shadow-md flex-1'>
          <p className='text-lg font-medium text-gray-600'>Total Items</p>
          <span className='text-2xl font-bold text-blue-600'>{totalQuantity}</span>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md flex-1'>
          <p className='text-lg font-medium text-gray-600'>Total Amount</p>
          <span className='text-2xl font-bold text-purple-600'>
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
  
      {cartItems.length === 0 ? (
        <div className='text-center py-12 space-y-4'>
          <BsCartX className='w-16 h-16 text-gray-300 mx-auto animate-bounce' />
          <p className='text-xl text-gray-500 font-medium'>
            Your cart feels lonely... Let's shop!
          </p>
        </div>
      ) : (
        <ul className='space-y-4'>
          {cartItems.map((item) => (
            <li 
              key={item.id}
              className='group bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300'
            >
            <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full'>
  <img
    src={item.thumbnail}
    alt={item.title}
    className='w-24 h-24 object-cover rounded-lg border-2 border-gray-100 group-hover:border-blue-200 transition-all'
  />

  <div className='flex-1 space-y-2 text-center md:text-left'>
    <h3 className='text-lg md:text-xl font-semibold text-gray-800'>{item.title}</h3>
    <p className='text-sm text-gray-500 italic'>{item.brand}</p>
    <div className='flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 text-gray-600 text-sm'>
      <span>${item.price}</span>
      <span className='text-gray-400'>×</span>
      <span className='font-medium'>{item.quantity}</span>
      <span className='px-2 py-1 bg-blue-50 text-blue-600 rounded'>
        ${(item.price * item.quantity).toFixed(2)}
      </span>
    </div>
  </div>

  <button
    onClick={() => handleRemove(item.id)}
    className='mt-3 md:mt-0 flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm'
  >
    <BsTrash className='w-5 h-5' />
    <span className='font-medium'>Remove</span>
  </button>
</div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
