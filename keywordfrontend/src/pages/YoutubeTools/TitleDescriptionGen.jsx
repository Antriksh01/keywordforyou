import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import TitleGenTab from "../../component/TitleGenTab";
import DescGenTab from "../../component/DescGenTab";

const TitleDescriptionGen = () => {
  const [activeTab, setActiveTab] = useState("title");
  return (
    <>
      <div className="flex flex-col items-center bg-white p-6">
        <h1 className="text-2xl font-semibold mb-4">
          YouTube Meta Data Generator
        </h1>

        {/* <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("title")}
            className={`py-2 text-xs px-6 rounded ${
              activeTab === "title"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            YouTube Title Generator
          </button>
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 text-xs px-6 rounded ${
              activeTab === "description"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            YouTube Description Generator
          </button>
        </div> */}
      </div>
      {/* {activeTab === "title" ? <TitleGenTab /> : <DescGenTab />} */}
      <DescGenTab />
    </>
  );
};

export default TitleDescriptionGen;
