// src/pages/Home.js
import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



const Home = () => {
  return (
    <div className="pt-24 bg-gradient-to-b from-red-200 to-white flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start">
          {/* Image */}
          <div className="w-full md:w-1/3 sm:w-1/3 xs:w-1/5 lg:w-1/4">
            <img
              src="https://i.ibb.co/4WSXDyC/priscilla-du-preez-3g-Aiaj-Afj-XI-unsplash.jpg"
              alt="Two people having a conversation"
              className="rounded-3xl shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="pt-20 mt-8 md:mt-0 w-full md:w-1/2 lg:w-2/5 md:pl-20 sm:1/3">
            <h1 className="text-5xl md:text-5xl font-bold text-red-700">
              PEPP is a safe conversation space
            </h1>
            <p className="mt-6 text-2xl text-red-700">
              for North Korean refugees to practice their English language skills and develop long-lasting friendships with native English speakers.
            </p>
            <div className="mt-6">
              {/* Button that links to Contact Us page */}
              <Link to="/contact">
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-md font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
