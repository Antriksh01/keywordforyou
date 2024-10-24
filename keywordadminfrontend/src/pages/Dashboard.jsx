import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
// import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div
          className={`main-content transition-all w-full duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <Header isSidebarOpen={isSidebarOpen} />
          <h2>Hello dashboard</h2>
          {/* <DashboardContent /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
