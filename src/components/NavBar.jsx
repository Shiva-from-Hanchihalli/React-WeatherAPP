import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
        <img src="https://img.freepik.com/premium-vector/weather-icon-vector-image-can-be-used-geography_120816-181158.jpg" alt="Logo" className="logo" />
          <Link to="/" className="nav-link">
         
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/login" className="nav-link1">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
