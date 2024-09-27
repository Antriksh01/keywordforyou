import React, { useState } from "react";

const EstEarnCpm = () => {
  const [dailyViews, setDailyViews] = useState(0);
  const [cpm, setCpm] = useState([0.3]);

  const formatCurrency = (value) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  const calculateEarnings = () => {
    const minEarnings = (dailyViews / 1000) * cpm[0];
    const maxEarnings = (dailyViews / 1000) * cpm[1];
    return [minEarnings, maxEarnings];
  };

  const [minEarnings, maxEarnings] = calculateEarnings();
  return (
    <>
      <div className="flex flex-col gap-8 p-8 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Daily Views
            </label>
            <input
              type="number"
              value={dailyViews}
              onChange={(e) => setDailyViews(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="range"
              min="0"
              max="4000000"
              value={dailyViews}
              onChange={(e) => setDailyViews(Number(e.target.value))}
              className="mt-2 w-full"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Estimated CPM - ($0.3 - $4)
            </label>
            <input
              type="range"
              min="0.3"
              max="4"
              step="0.1"
              value={cpm[0]}
              onChange={(e) => setCpm([Number(e.target.value), cpm[1]])}
              className="mt-2 w-full"
            />
            <input
              type="range"
              min="0.3"
              max="4"
              step="0.1"
              value={cpm[1]}
              onChange={(e) => setCpm([cpm[0], Number(e.target.value)])}
              className="mt-2 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 text-center">
            <p className="text-red-500 font-bold">Estimated Daily Earnings</p>
            <p>{`${formatCurrency(minEarnings)} - ${formatCurrency(
              maxEarnings
            )}`}</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-red-500 font-bold">Estimated Monthly Earnings</p>
            <p>{`${formatCurrency(minEarnings * 30)} - ${formatCurrency(
              maxEarnings * 30
            )}`}</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-red-500 font-bold">Estimated Yearly Projected</p>
            <p>{`${formatCurrency(minEarnings * 365)} - ${formatCurrency(
              maxEarnings * 365
            )}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstEarnCpm;
