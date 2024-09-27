import React, { useState } from "react";
import EstEarnCpm from "../../component/EstEarnCpm";
import EstEarnCtr from "../../component/EstEarnCtr";

const MoneyCalculator = () => {
  const [activeTab, setActiveTab] = useState("title");
  return (
    <>
      <div className="flex flex-col items-center bg-white p-6">
        <h1 className="text-4xl font-semibold mb-4">
          YouTube Money Calculator
        </h1>
        <h2 className="text-md font-bold">
          Check How Much Money Do YouTubers Make?
        </h2>

        <div className="flex space-x-4 mb-6 mt-4">
          <button
            onClick={() => setActiveTab("title")}
            className={`py-2 font-bold text-xs px-6 rounded-xl ${
              activeTab === "title"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Estimated Total Earning By CPM
          </button>
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 text-xs px-6 font-bold rounded-xl ${
              activeTab === "description"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Estimated Total Earning By CTR
          </button>
        </div>
      </div>
      {activeTab === "title" ? <EstEarnCpm /> : <EstEarnCtr />}
    </>
  );
};

export default MoneyCalculator;
