import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Typography } from '@material-tailwind/react';
import InfoCard from './cards/InfoCard';

const Dashboard = ({ userName }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Define chartInstance ref

  // Dummy data for the stock report graph
  const stockReportData = [
    { date: '2022-01-01', stockIn: 100, stockOut: 50 },
    { date: '2022-01-02', stockIn: 150, stockOut: 75 },
    { date: '2022-01-03', stockIn: 200, stockOut: 100 },
    // Add more data as needed
  ];

  const todaySale = 500; // Dummy value
  const yearlyTotalSale = 12000; // Dummy value
  const netIncome = 4000; // Dummy value
  const productsSold = 300; // Dummy value

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy previous chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new Chart instance
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: stockReportData.map((item) => item.date),
          datasets: [
            {
              label: 'Stock In',
              data: stockReportData.map((item) => item.stockIn),
              backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for stock in
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              barThickness: 60, // Adjusted for responsiveness
            },
            {
              label: 'Stock Out',
              data: stockReportData.map((item) => item.stockOut),
              backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color for stock out
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              barThickness: 60, // Adjusted for responsiveness
            },
          ],
        },
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      });
    }
  }, [stockReportData]);

  return (
    <div className="min-h-screen mb-[200px] pb-12 w-[90%] lg:ml-[200px] p-4 mt-20 "> {/* Adjusted margin for large screens */}
      <div className="text-[25px] font-bold mb-4 bg-secondary-color text-white p-10">Hello, {userName}</div>

      <div className='w-[80%] m-auto'>
      <div>
      <Typography variant="h6" color="secondary-color" className='font-bold text-[25px] mb-3'>
          Activity
        </Typography>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-2">
          <h2 className="text-lg font-semibold mb-2">Today's Sale</h2>
          <p className="text-xl">{todaySale} USD</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-2">
          <h2 className="text-lg font-semibold mb-2">Yearly Total Sale</h2>
          <p className="text-xl">{yearlyTotalSale} USD</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-2">
          <h2 className="text-lg font-semibold mb-2">Net Income</h2>
          <p className="text-xl">{netIncome} USD</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-2">
          <h2 className="text-lg font-semibold mb-2">Products Sold</h2>
          <p className="text-xl">{productsSold}</p>
        </div>
      </div>

      </div>
    <div className='flex lg:flex-row flex-col m-auto'>
      <InfoCard 
          title="Purchase Order"
          quantity={0}
          totalCost={0.00}
          />
      <InfoCard 
          title="Sales Order"
          quantity={0}
          totalCost={0}
          />
        </div>
      {/* Stock Report Graph */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Stock Report</h2>
        {/* Stock Report Graph */}
        <canvas ref={chartRef} className="w-full" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
};

export default Dashboard;
