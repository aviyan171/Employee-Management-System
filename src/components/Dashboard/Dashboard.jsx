import React from "react";
import "./Dashboard.css";
import Home from "../../Assets/Home.png";
import { Link } from "react-router-dom";
import { useData } from "../../Context";

const Dashboard = () => {
  const { people } = useData();
  console.log(people);
  return (
    <div>
      <p className="Welcome">Welcome to Employee Management System</p>
      <div className="home-container">
        <Link to="/home">
          <img src={Home} alt="Home" className="home-icon" />
        </Link>
        <p className="Home"> Home</p>
      </div>
    </div>
  );
};

export default Dashboard;
