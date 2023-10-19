import React from "react";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import Search from "./Search";
import Repos from "./Repos";
import Info from "./Info";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <main className="section">
        <div className="center">
          <h1>Please Wait... </h1>
          <img src={loadingImage} className="loading-img" alt="loading" />
        </div>
      </main>
    );
  }

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <div className="user">
        <h1>Dashboard</h1>
      </div>

      <div className="dashboard-header">
        <p>
          Welcome... <span className="user-name">{user && user.email} </span>{" "}
        </p>

        <div className="dashboard-header-p2">
          <Search />
          <div onClick={handleLogout} className="log-out">
            <button className="log-out-btn">Log out</button>
          </div>
        </div>
      </div>

      <Info />
      <Repos />
    </main>
  );
};

export default Dashboard;
