import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">BrandName</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className="text-gray-600 hover:text-blue-600 transition uppercase">Home</NavLink>
            <NavLink to="/login" className="text-gray-600 hover:text-blue-600 transition uppercase">Login</NavLink>
            <NavLink to="/signUp" className="text-gray-600 hover:text-blue-600 transition uppercase">signUp</NavLink>
            <NavLink to="/" className="text-gray-600 hover:text-blue-600 transition uppercase">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              {isOpen ? "X" : "..." }
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <NavLink to="/" className="block text-gray-600 hover:text-blue-600 transition uppercase">Home</NavLink>
          <NavLink to="/" className="block text-gray-600 hover:text-blue-600 transition uppercase">About</NavLink>
          <NavLink to="/" className="block text-gray-600 hover:text-blue-600 transition uppercase">Services</NavLink>
          <NavLink to="/" className="block text-gray-600 hover:text-blue-600 transition uppercase">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
