import React, { useState } from "react";
import { Link } from "react-router-dom";

const EstEarnCpm = () => {
  const [dailyViews, setDailyViews] = useState(1735683); // Default value from the image
  const [cpmRange, setCpmRange] = useState([1.3, 7.7]);

  const handleDailyViewsChange = (e) => setDailyViews(e.target.value);
  const handleCpmRangeMinChange = (e) =>
    setCpmRange([e.target.value, cpmRange[1]]);
  const handleCpmRangeMaxChange = (e) =>
    setCpmRange([cpmRange[0], e.target.value]);

  // Calculate earnings based on CPM range
  const calculateEarnings = (views, cpm) => {
    const minEarnings = (views * cpm[0]) / 1000;
    const maxEarnings = (views * cpm[1]) / 1000;
    return [minEarnings.toFixed(2), maxEarnings.toFixed(2)];
  };

  const [dailyEarningsMin, dailyEarningsMax] = calculateEarnings(
    dailyViews,
    cpmRange
  );

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-50 p-10 rounded-lg shadow-xl shadow-red-200 mb-12 max-w-4xl w-full">
          <div className="flex justify-between">
            <div>
              {/* Daily Views Section */}
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">
                  Daily Views
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                  value={dailyViews}
                  onChange={handleDailyViewsChange}
                />
                <input
                  type="range"
                  min="0"
                  max="4000000"
                  value={dailyViews}
                  onChange={handleDailyViewsChange}
                  className="w-full slider-custom"
                />
              </div>

              {/* CPM Range Section */}
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">
                  Estimated CPM - ($0 - $4)
                </label>
                <div className="flex space-x-4 mb-2">
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={cpmRange[0]}
                    onChange={handleCpmRangeMinChange}
                  />
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={cpmRange[1]}
                    onChange={handleCpmRangeMaxChange}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={cpmRange[0]}
                  onChange={handleCpmRangeMinChange}
                  step="0.1"
                  className="w-full slider-custom"
                />
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={cpmRange[1]}
                  onChange={handleCpmRangeMaxChange}
                  step="0.1"
                  className="w-full mt-2 slider-custom"
                />
              </div>
            </div>

            {/* Earnings Display Section */}
            <div className="text-left">
              {/* Daily Earnings */}
              <div className="mb-6">
                <h3 className="text-lg font-bold">Estimated Daily Earnings</h3>
                <p className="text-2xl font-semibold text-red-500">
                  ${dailyEarningsMin} - ${dailyEarningsMax}
                </p>
              </div>

              {/* Monthly Earnings */}
              <div className="mb-6">
                <h3 className="text-lg font-bold">
                  Estimated Monthly Earnings
                </h3>
                <p className="text-2xl font-semibold text-red-500">
                  ${(dailyEarningsMin * 30).toFixed(2)} - $
                  {(dailyEarningsMax * 30).toFixed(2)}
                </p>
              </div>

              {/* Yearly Earnings */}
              <div className="mb-6">
                <h3 className="text-lg font-bold">
                  Estimated Yearly Projected
                </h3>
                <p className="text-2xl font-semibold text-red-500">
                  ${(dailyEarningsMin * 365).toFixed(2)} - $
                  {(dailyEarningsMax * 365).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstEarnCpm;
