// src/components/Button.js
import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="bg-blue-400 text-white px-6 py-3 rounded-lg shadow-md mt-4 hover:bg-blue-600">
      {text}
    </button>
  );
};

export default Button;
