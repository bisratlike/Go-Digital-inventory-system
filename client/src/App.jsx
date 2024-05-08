import React from 'react';
import Dashboard from './components/Dashboard';
import { SideBar } from './components';
import { MainNavBar } from './components';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <>
          <MainNavBar/>
      <div className='flex flex-row h-screen'>
        <SideBar />
        <div className='flex-1 flex flex-col'>
        <div className="main-content flex flex-col">
          <Routes>
            <Route path="/" element={<Dashboard userName="Dan" />} />
            {/* Other routes */}
          </Routes>
            </div>
            <Footer className="mt-20"/>
        </div>
      </div>
      </>
    </Router>
  );
};

export default App;
