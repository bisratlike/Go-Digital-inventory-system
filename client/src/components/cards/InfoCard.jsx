import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';

function InfoCard({ title, quantity, totalCost }) {
  // Dropdown state management
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Options for the dropdown menu
  const dropdownOptions = [
    'Today',
    'Yesterday',
    'This Week',
    'This Year',
    'Previous Week',
    'Previous Month',
  ];

  // Handle dropdown option selection
  const handleSelectOption = (option) => {
    setSelectedPeriod(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full p-4 rounded-lg shadow-lg"> {/* Card Container */}
      {/* Card Header */}
      <div className="flex justify-between items-center bg-background-color text-white p-3 rounded-t-lg"> {/* Top Section */}
        <Typography variant="h6" className="font-extrabold text-secondary-color">
          {title}
        </Typography>
        <div className="relative">
          <div className="flex items-center gap-1 cursor-pointer" onClick={toggleDropdown}>
            <Typography variant="small" className="font-normal text-secondary-color">
              {selectedPeriod}
            </Typography>
            {isDropdownOpen ? (
              <ChevronUpIcon className="w-5 h-5 text-secondary-color" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-secondary-color" />
            )}
          </div>

          {isDropdownOpen && (
            <div className="absolute bg-white border rounded shadow mt-2 right-0 p-3 z-10">
              <ul>
                {dropdownOptions.map((option) => (
                  <li
                    key={option}
                    className={`p-2 hover:bg-gray-100 text-secondary-color cursor-pointer ${
                      option === selectedPeriod ? 'bg-gray-200' : ''
                    }`}
                    onClick={() => handleSelectOption(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col p-3 bg-white rounded-b-lg"> {/* Bottom Section */}
        <Typography variant="small" className="text-gray-700 text-center">
          Quantity Ordered: <div className='text-primary-color font-bold text-2xl'>{quantity}</div>
        </Typography>

        <hr className="my-2 border-blue-gray-50" />

        <Typography variant="small" className="text-gray-700 text-center">
          Total Cost: <div className='text-primary-color font-bold text-2xl'>ETB {totalCost}</div>
        </Typography>
      </div>
    </div>
  );
}

export default InfoCard;
