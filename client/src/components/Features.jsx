// src/components/Features.jsx
import React from 'react';

const Features = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-1/3 px-4 text-center">
            <i className="fas fa-box fa-3x text-blue-500"></i>
            <h3 className="mt-4 text-xl font-semibold">Inventory Management</h3>
            <p className="mt-2 text-gray-700">
              Track and manage your inventory in real-time with ease.
            </p>
          </div>
          <div className="w-1/3 px-4 text-center">
            <i className="fas fa-truck fa-3x text-blue-500"></i>
            <h3 className="mt-4 text-xl font-semibold">Order Processing</h3>
            <p className="mt-2 text-gray-700">
              Simplify order processing and streamline your workflow.
            </p>
          </div>
          <div className="w-1/3 px-4 text-center">
            <i className="fas fa-chart-line fa-3x text-blue-500"></i>
            <h3 className="mt-4 text-xl font-semibold">Analytics</h3>
            <p className="mt-2 text-gray-700">
              Gain insights into your inventory trends and optimize accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
