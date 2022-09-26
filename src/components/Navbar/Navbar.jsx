import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="List-container">
        <Link className="lists" to="/dashboard">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
