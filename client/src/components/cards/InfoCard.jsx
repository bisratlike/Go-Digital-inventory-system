import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';

function InfoCard({ title, quantity, totalCost }) {
  return (
    <div className="w-full p-4 rounded-lg shadow-lg"> {/* Card Container */}
      {/* Card Header */}
      <div className="flex justify-between items-center bg-background-color text-white p-3 rounded-t-lg"> {/* Top Section */}
        <Typography variant="h6" className="font-extrabold text-secondary-color">
          {title}
        </Typography>
        <div className="flex items-center gap-1">
          <Typography variant="small" className="font-normal text-secondary-color">
            This Month
          </Typography>
          <ChevronDownIcon className="w-5 h-5 text-secondary-color" />
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col p-3 bg-white rounded-b-lg"> {/* Bottom Section */}
        <Typography variant="small" className="text-gray-700 text-center">
          Quantity Ordered: <div className='text-primary-color font-bold text-2xl'>{quantity}</div>
        </Typography>

        <hr className="my-2 border-blue-gray-50" />

        <Typography variant="small" className="text-gray-700 text-center">
          Total Cost: <div className='text-primary-color font-bold text-2xl'>ETB{totalCost}</div>
        </Typography>
      </div>
    </div>
  );
}

export default InfoCard;
