// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CTA />
    </div>
  );
};

export default Home;

{/* <Link to="/login">Login</Link> */}