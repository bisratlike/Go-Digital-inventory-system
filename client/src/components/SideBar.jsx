import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faShoppingCart, faCog, faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex lg:flex-col fixed h-full bg-gray-800 text-white w-64">
        <div className="p-4 text-xl font-bold">Dashboard</div>
        <div className="flex flex-col">
          <div className="p-2 pl-4 text-lg font-semibold">General</div>
          <NavLink to="/" activeClassName="bg-gray-900">
            <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </div>
          </NavLink>
          <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
            Sales
            <div className="ml-auto">
              <button className="text-white hover:bg-gray-900 px-2 py-1 rounded">Dropdown</button>
            </div>
          </div>
          <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Purchase
            <div className="ml-auto">
              <button className="text-white hover:bg-gray-900 px-2 py-1 rounded">Dropdown</button>
            </div>
          </div>
          <NavLink to="/reports" activeClassName="bg-gray-900">
            <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
              <FontAwesomeIcon icon={faChartBar} className="mr-2" />
              Reports
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col mt-4">
          <div className="p-2 pl-4 text-lg font-semibold">Support</div>
          <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Settings
          </div>
        </div>
      </div>

      {/* Hamburger icon for small screens */}
      <div className="lg:hidden fixed top-4 right-4">
        <button onClick={toggleSidebar} className="text-white">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-full bg-gray-800 text-white w-64">
          <div className="p-4 text-xl font-bold">Dashboard</div>
          <div className="flex flex-col">
            <div className="p-2 pl-4 text-lg font-semibold">General</div>
            <NavLink to="/" activeClassName="bg-gray-900">
              <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </div>
            </NavLink>
            <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
              <FontAwesomeIcon icon={faChartBar} className="mr-2" />
              Sales
              <div className="ml-auto">
                <button className="text-white hover:bg-gray-900 px-2 py-1 rounded">Dropdown</button>
              </div>
            </div>
            <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Purchase
              <div className="ml-auto">
                <button className="text-white hover:bg-gray-900 px-2 py-1 rounded">Dropdown</button>
              </div>
            </div>
            <NavLink to="/reports" activeClassName="bg-gray-900">
              <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
                <FontAwesomeIcon icon={faChartBar} className="mr-2" />
                Reports
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col mt-4">
            <div className="p-2 pl-4 text-lg font-semibold">Support</div>
            <div className="flex items-center p-2 pl-4 hover:bg-gray-900">
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              Settings
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
