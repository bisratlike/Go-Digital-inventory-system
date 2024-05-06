import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="grid grid-cols-1 sm:grid-cols-auto gap-4">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard userName="Dan" />} />
            {/* Other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
