import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [applicants, setApplicants] = useState(null);

  useEffect(() => {
    // Check localStorage for logged-in user
    const storedApplicants = localStorage.getItem("Applicants");
    try {
      setApplicants(storedApplicants ? JSON.parse(storedApplicants) : null);
    } catch (error) {
      console.error("Error parsing Applicants from localStorage:", error);
      localStorage.removeItem("Applicants");
    }
  }, []); // Runs once when the component mounts

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0000004b] text-gray-100 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">BrandName</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {applicants ? (
              <>
                <NavLink to="/" className=" hover:text-blue-600 transition uppercase">Home</NavLink>
                <NavLink to="/about" className=" hover:text-blue-600 transition uppercase">About</NavLink>
                <NavLink to="/contact" className=" hover:text-blue-600 transition uppercase">Contact</NavLink>
                <NavLink to="/profile" className=" hover:text-blue-600 transition uppercase">Profile</NavLink>
                <NavLink to="/adminDashboard" className=" hover:text-blue-600 transition uppercase">Admin dashboard</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/signup" className=" hover:text-blue-600 transition uppercase">Sign Up</NavLink>
                <NavLink to="/login" className=" hover:text-blue-600 transition uppercase">Login</NavLink>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className=" hover:text-blue-600 focus:outline-none">
              {isOpen ? "X" : "..."}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
        {applicants ? (
          <>
            <NavLink to="/" className="block  hover:text-blue-600 transition uppercase">Home</NavLink>
            <NavLink to="/about" className="block  hover:text-blue-600 transition uppercase">About</NavLink>
            <NavLink to="/contact" className="block  hover:text-blue-600 transition uppercase">Contact</NavLink>
            <NavLink to="/profile" className="block  hover:text-blue-600 transition uppercase">Profile</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signup" className="block  hover:text-blue-600 transition uppercase">Sign Up</NavLink>
            <NavLink to="/login" className="block  hover:text-blue-600 transition uppercase">Login</NavLink>
          </>
        )}
      </div>
    </div>
    
    </nav>
  );
};

export default Navbar;
