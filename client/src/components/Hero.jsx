// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Welcome to InventoryPro</h1>
        <p className="mt-4 text-lg">
          The ultimate solution to manage your inventory efficiently and effortlessly.
        </p>
        <div className="mt-6">
        <Link to="/login" className='bg-primary-color text-white py-4 px-8 rounded-md'>Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
