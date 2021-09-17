import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  const logoStyle = {
    color: "red",
    textDecoration: "none",
    fontSize: "80px",
    marginRight: "200px",
    display: "flex",
    justifyContent: "flex-end",
  };
  return (
    <div className="register-success-content">
      <Link className="close-btn" style={logoStyle} to="/">
        ×
      </Link>
      <div classname="success-title-container">
        <h1 className="register-success-title">Welcome to Team 3!</h1>
      </div>
      <div className="success-img"></div>
    </div>
  );
};

export default RegisterSuccess;
