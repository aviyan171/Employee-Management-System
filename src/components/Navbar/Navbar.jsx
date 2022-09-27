import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.css";
import { GrLogout } from "react-icons/gr";
const Navbar = ({ setAuth }) => {
  //Logout
  const handlelogout = () => {
    localStorage.removeItem("logindetails");
    setAuth(false);
    <Navigate replace to="/" />;
  };

  return (
    <div className="navbar">
      <div className="List-container">
        <Link className="lists" to="/dashboard">
          Dashboard
        </Link>
        <GrLogout className="logout" onClick={handlelogout} />
      </div>
    </div>
  );
};

export default Navbar;
