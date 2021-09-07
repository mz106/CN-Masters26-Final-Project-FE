import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const footerStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <footer>
      <ul className="nav-links">
        <Link style={footerStyle} to="/about">
          <li className="footers">ABOUT</li>
        </Link>
        <Link style={footerStyle} to="/contact">
          <li className="footers">CONTACT</li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
