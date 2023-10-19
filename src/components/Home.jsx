import React from "react";
import { TbDashboard } from "react-icons/tb";
import { BiSolidBookBookmark, BiUserCircle } from "react-icons/bi";
import { AiOutlineSchedule, AiOutlineSetting } from "react-icons/ai";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <section className="hero">
      <div className="nav-bar">
        <div>
          <h1 className="board">Board.</h1>

          <ul className="nav-links">
            <li className="nav-link-item">
              <TbDashboard />
              Dashboard
            </li>
            <li className="nav-link-item">
              <BiSolidBookBookmark />
              Transsaction
            </li>
            <li className="nav-link-item">
              <AiOutlineSchedule />
              Schedule
            </li>
            <li className="nav-link-item">
              <BiUserCircle />
              Users
            </li>
            <li className="nav-link-item">
              <AiOutlineSetting />
              Settings
            </li>
          </ul>
        </div>

        <ul className="nav-links">
          <li className="nav-link-item">Help</li>
          <li className="nav-link-item">Contact us</li>
        </ul>
      </div>

      <div className="dashboard">
        <Dashboard />
      </div>
    </section>
  );
};

export default Home;
