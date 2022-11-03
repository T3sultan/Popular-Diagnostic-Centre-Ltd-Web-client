import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-xl font-bold text-purple-400 ">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointment</Link>
          </li>
          <li>
            <Link to="/dashboard/myreview">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/history">History</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
