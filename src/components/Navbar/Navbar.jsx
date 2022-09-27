import React, { useEffect } from "react";
import { json, Link, Navigate, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { GrLogout } from "react-icons/gr";
const Navbar = ({ isAuth, setAuth }) => {
  // const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("logindetails");
    setAuth(false);
    <Navigate replace to="/" />;
  };

  // useEffect(() => {
  //   handlelogout();
  // }, [loggedout]);

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
