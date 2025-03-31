import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaShoppingCart, FaBars , FaTimes   } from "react-icons/fa";

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'Shop', path: '/shop'},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contact'},
  ];

  return (
    <nav className='flex items-center justify-between p-4 bg-white shadow-md'>
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
     
     {/*Search Bar, hidden on mobile */}

      <div className='hidden md: flex-1 max-w-xl mx-4'>
        <div className='relative'>
          <input 
          type='text'
          placeholder='Search for product...'
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
        <FaShoppingCart size={20} />
        </Link>
      </div>

      {/*Mobie menu button */}

      <button className='md:hidden p-2 text-gray-600 hover:text-amber-600' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24}/>}
      </button>

      {/*Mobile menu dropdown */}

      <div className={`md:hidde ${isOpen ? 'block' : 'hidden'}`}>
          <div className='pt-2 pb-4 space-y-1'>
            {/*Mobile searchbar */}

            <div className='px-2'>
              <input 
              type='text'
              placeholder='Search product...'
              className='w-full px-4 py-2 rounded-lg focus:outline-none  focus:ring-2 focus:ring-amber-600'
              />

            </div>

            {/*Mobile navigation inks */}

            {navLinks.map((link) => (
              <Link 
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className='block px-3 py2 text-gray-600 hover:bg-gray-100 rounded-lg'
              >
                {link.name}
              </Link>
            ))}
          </div>

      </div>
    </nav>
  )
}

export default NavBar
