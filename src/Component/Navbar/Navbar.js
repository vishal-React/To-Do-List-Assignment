import React from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";

const Navbar = ({toggleSidebar,toggleLayout}) => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <IoMenu className="menuIC" onClick={toggleSidebar}/>
        <img src="/asset/logomark.png" alt="DoIt Logo" className="logo" />
        <h1>DoIt</h1>
      </div>
      <div className="navbar-actions">
        <button className="navbar-icon">
          <i className="fas fa-search"></i>
        </button>
        <button className="navbar-icon" onClick={toggleLayout}>
          <i className="fas fa-th"></i>
        </button>
        <button className="navbar-icon">
          <i className="fas fa-moon"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
