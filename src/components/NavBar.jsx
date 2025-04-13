import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser, FaShoppingCart, FaBars , FaArrowLeft, FaTimes    } from "react-icons/fa";
import { useSelector } from 'react-redux';

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
   const cartItems =  useSelector((state) => state.cart.items);// get cart items from redux
   const cartCount = cartItems.length;

   const[ searchInput, setSearchInput] =  useState('');
   const navigate = useNavigate();

  const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'Shop', path: '/shop'},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contact'},
  ];

    // 👉 This function is triggered when user presses "Enter"

  const handleSearch = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();

      if(searchInput.trim() !== '') {
         // navigate to /search?q=yourSearchText
        navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
        setSearchInput('');  // clear input after search
      }
    }
  }



  return (
    <nav className='flex items-center justify-between p-4 bg-white shadow-md '>
      <div className='flex items-center'>
      <Link to='/' className='flex flex-col'>
        <span className='text-2xl font-bold text-amber-800'>
          AtoZ Market
        </span>
        <span className='text-xs text-gray-500'>
          Yaha sab kuch hai!
        </span>
      </Link>
      </div>

      {/* Desktop Navigation Link  , hidden on mobile*/}
    <div className='hidden md:flex items-center space-x-6'>
    {navLinks.map((link) => (
        <Link key={link.path} to={link.path} className='text-gray-600 hover:text-amber-600 transition-colors'>
          {link.name}
        </Link>
      ))}
    </div>
     
     {/*Search Bar */}

      <div className='md:flex-1 max-w-xl mx-4'>
        <div className='relative'>
          <input 
          type='text'
          placeholder='Search for product...'
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)} // update input value
          onKeyDown={handleSearch} // run search on Enter key
          className='w-full px-4 py-2 border rounded-lg focus: outline-none focus: ring-2 focus:ring-amber-800'
          />
          
        </div>
      </div>

      {/*User Profile and Cart */}


      <div className='flex items-center space-x-4'>
        <Link to='/profile' className='text-gray-600 hover:text-amber-600'>
        <FaUser size={20} />
        </Link>

        <Link to='/cart' className='text-gray-600 hover:text-amber-600'>
        <div className='relative'>
          <FaShoppingCart size={20} />
          {cartCount > 0 && ( <span className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{cartCount}</span>)}
         
        </div>
        
        </Link>
      </div>

      {/*Mobie menu button */}

      <button className='md:hidden p-2 text-gray-600 hover:text-amber-600' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24}/>}
      </button>

      {/*Mobile menu dropdown */}

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className='pt-2 pb-4 space-y-1'>

            {/*Mobile searchbar */}

            {/* <div className='px-2'>
              <input 
              type='text'
              placeholder='Search product...'
              className='w-full px-4 py-2 rounded-lg focus:outline-none  focus:ring-2 focus:ring-amber-600'
              />

            </div> */}

            {/*Mobile navigation inks */}

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out z-50 ${isOpen ? 'w-full' : 'w-0'}`}>
            <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-700 text-lg px-4 py-3 flex items-center gap-2 hover:text-amber-600"
                >
                  <FaArrowLeft /> Back
                </button>

            
            <nav className='flex flex-col'>
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className='block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 transition'
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          </div>

      </div>
    </nav>
  )
}

export default NavBar
