import React, { useState } from "react";

const EstEarnCtr = () => {
  const [viewsPerDay, setViewsPerDay] = useState(27159);

  const dailyEarnings = (viewsPerDay * 0.0018).toFixed(2);
  const maxDailyEarnings = (viewsPerDay * 0.0031).toFixed(2);
  const monthlyEarnings = (dailyEarnings * 30).toFixed(2);
  const maxMonthlyEarnings = (maxDailyEarnings * 30).toFixed(2);
  const yearlyEarnings = (monthlyEarnings * 12).toFixed(2);
  const maxYearlyEarnings = (maxMonthlyEarnings * 12).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg shadow-red-300 mb-12 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Daily Views</h2>

      <div className="flex items-center mb-6">
        <input
          type="range"
          min="0"
          max="50000"
          value={viewsPerDay}
          onChange={(e) => setViewsPerDay(e.target.value)}
          className="mr-4 w-full slider-custom"
        />
        <span>{viewsPerDay.toLocaleString()}</span>
      </div>

      <div className="flex justify-between mb-6">
        <div>
          <p className="font-semibold">Views/Day</p>
          <p>{viewsPerDay.toLocaleString()}</p>
        </div>
        <div>
          <p className="font-semibold">Views/Month</p>
          <p>{(viewsPerDay * 30).toLocaleString()}</p>
        </div>
        <div>
          <p className="font-semibold">Views/Year</p>
          <p>{(viewsPerDay * 365).toLocaleString()}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Earnings</h2>
      <div className="flex justify-between mb-2">
        <p className="font-semibold">Estimated Daily Earnings</p>
        <p>
          ${dailyEarnings} - ${maxDailyEarnings}
        </p>
      </div>

      <div className="flex justify-between mb-2">
        <p className="font-semibold">Estimated Monthly Earnings</p>
        <p>
          ${monthlyEarnings} - ${maxMonthlyEarnings}
        </p>
      </div>

      <div className="flex justify-between mb-2">
        <p className="font-semibold">Estimated Yearly Projected</p>
        <p>
          ${yearlyEarnings} - ${maxYearlyEarnings}
        </p>
      </div>
    </div>
  );
};

export default EstEarnCtr;
