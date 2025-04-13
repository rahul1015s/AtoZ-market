import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser, FaShoppingCart, FaBars, FaArrowLeft, FaTimes, FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      if (searchInput.trim()) {
        navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
        setSearchInput('');
        setIsOpen(false); // Close mobile menu after search
      }
    }
  };

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between p-4 bg-white shadow-md'>
      {/* Logo Section */}
      <div className='flex items-center flex-shrink-0'>
        <Link to='/' className='flex flex-col hover:opacity-80 transition-opacity'>
          <span className='text-2xl font-bold text-amber-800 font-logo'>
            AtoZ Market
          </span>
          <span className='text-xs text-gray-500 mt-[-2px]'>
            Yaha sab kuch hai!
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center space-x-6 ml-8'>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className='px-3 py-1 text-gray-600 hover:text-amber-700 transition-colors font-medium rounded-lg hover:bg-amber-50'
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Search Bar - Desktop */}
      <div className=' hidden md:flex flex-1 max-w-xl mx-8'>
        <div className='relative w-full'>
          <input
            type='text'
            placeholder='Search for products...'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleSearch}
            className='w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent'
          />

        </div>
      </div>

      {/* Icons Section */}
      <div className='flex items-center space-x-4'>
        <Link
          to='/profile'
          className='p-2 text-gray-600 hover:text-amber-700 rounded-full hover:bg-amber-50 transition-colors'
          aria-label='Profile'
        >
          <FaUser size={20} />
        </Link>

        <Link
          to='/cart'
          className='p-2 text-gray-600 hover:text-amber-700 rounded-full hover:bg-amber-50 transition-colors relative'
          aria-label='Cart'
        >
          <FaShoppingCart size={20} />
          {cartCount > 0 && (
            <span className='absolute right-0 top-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-amber-700 rounded-full'>
              {cartCount}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 text-gray-600 hover:text-amber-700 rounded-lg hover:bg-amber-50'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/30 md:hidden z-40'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='p-4 border-b border-gray-200'>
          <button
            onClick={() => setIsOpen(false)}
            className='flex items-center space-x-2 text-gray-700 hover:text-amber-700'
          >
            <FaArrowLeft className='text-lg' />
            <span className='font-medium'>Close Menu</span>
          </button>
        </div>

        <div className='p-4'>
          {/* Mobile Search */}
          <div className='mb-6 relative'>
            <input
              type='text'
              placeholder='Search products...'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleSearch}
              className='w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600'
            />
            <button
              onClick={handleSearch}
              className='absolute right-3 top-2 text-gray-500 hover:text-amber-700'
              aria-label='Search'
            >
              <FaSearch size={16} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className='space-y-2'>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className='block px-4 py-3 text-gray-700 hover:bg-amber-50 rounded-lg transition-colors font-medium'
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default NavBar