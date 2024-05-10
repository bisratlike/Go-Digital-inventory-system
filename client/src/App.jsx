import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import AddNewCustomer from './pages/AddNewCustomer'
import './index.css'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setIsAuthenticated(!!token); // True if token exists, false otherwise
  }, []);

  return (
    <Router>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-new-customer" element={<AddNewCustomer />} />
        {isAuthenticated ? (
          <Route
            path="/dashboard"
            element={
              <div className="flex flex-row h-screen">
                <SideBar />
                <div className="flex-1 flex flex-col">
                  <div className="main-content flex flex-col">
                    <Dashboard userName="Dan" />
                    <Footer className="mt-20" />
                  </div>
                </div>
              </div>
            }
          />
        ) : (
          <Route path="/*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
