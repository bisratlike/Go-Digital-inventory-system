// src/components/CTA.jsx
import React from 'react';

const CTA = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg">
          Sign up today and take control of your inventory like never before.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
