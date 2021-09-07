import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
    listStyleType: "none",
  };
  return (
    <nav>
      <ul className="nav-link">
        <Link className="home" to="/" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/account" style={navStyle}>
          <li>Account</li>
        </Link>
        <Link to="/signup" style={navStyle}>
          <li>signup</li>
        </Link>
        <Link to="/login" style={navStyle}>
          <li>LOG IN</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
