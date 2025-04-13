import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { db } from '../auth/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, color: 'blue-600', url: 'https://www.facebook.com/rahul1015a' },
    { icon: <FaInstagram />, color: 'pink-500', url: 'https://www.instagram.com/rahul1015s/' },
    { icon: <FaTwitter />, color: 'sky-500', url: 'https://x.com/rahul1015s' },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, 'subscribers'), {
        email: email.toLowerCase().trim(),
        subscribedAt: serverTimestamp(),
        source: 'website-footer',
        status: 'active'
      });

      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Subscription failed. Please try again later.');
      console.error('Firestore error:', err);
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-amber-800 font-logo">AtoZ Market</span>
              <span className="text-xs text-gray-500 mt-[-2px]">Yaha sab kuch hai!</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your one-stop destination for quality products and exceptional service. 
              Serving customers since 2020.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="text-gray-600 hover:text-amber-700 text-sm transition-colors hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="flex-shrink-0 mr-2 text-amber-700" />
                <span className="text-sm">123 Market Street, New Delhi, India</span>
              </div>
              <a href="mailto:rahulwebjs@gmail.com" className="flex items-center hover:text-amber-700">
                <FaEnvelope className="flex-shrink-0 mr-2 text-amber-700" />
                <span className="text-sm">rahulwebjs@gmail.com</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center hover:text-amber-700">
                <FaPhoneAlt className="flex-shrink-0 mr-2 text-amber-700" />
                <span className="text-sm">+91 12345 67890</span>
              </a>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`p-2 rounded-full bg-white border hover:bg-amber-50 transition-colors text-gray-600 hover:text-${social.color} shadow-sm hover:shadow-md`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Newsletter Form */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Subscribe to our newsletter:</p>
              <div className="relative">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubscribe(e)}
                    className="flex-1 px-4 py-2 border border-r-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
                    disabled={loading}
                  />
                  <button 
                    onClick={handleSubscribe}
                    className="px-4 py-2 bg-amber-700 text-white rounded-r-lg hover:bg-amber-800 transition-colors text-sm flex items-center disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg 
                          className="animate-spin h-4 w-4 mr-2 text-white" 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24"
                        >
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                          ></circle>
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : 'Subscribe'}
                  </button>
                </div>
                
                {/* Feedback Messages */}
                {error && (
                  <p className="text-red-500 text-xs mt-1 animate-fade-in">{error}</p>
                )}
                {success && (
                  <p className="text-green-600 text-xs mt-1 animate-fade-in">
                    Thank you for subscribing! 🎉
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} AtoZ Market. All rights reserved. 
            <span className="block md:inline mt-1 md:mt-0 md:ml-2">
                Designed with ❤️ by Rahul
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;