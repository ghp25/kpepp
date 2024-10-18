// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 shadow-xl bg-white">
      <div className="px-1 text-3xl font-bold font-kalam bg-gradient-to-r from-red-400 to-blue-400 text-transparent bg-clip-text pt-1">PEPP</div>
      <div className="space-x-6">
        <Link to="/" className="text-black font-semibold">Home</Link>
        <Link to="/about" className="text-black font-semibold">About Us</Link>
        <Link to="/contact" className="text-black font-semibold">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
