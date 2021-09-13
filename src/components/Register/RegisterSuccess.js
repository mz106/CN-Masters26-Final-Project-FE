import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  const logoStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "80px",
    marginRight: "200px",
    display: "flex",
    justifyContent: "flex-end",
  };
  return (
    <div className="register-Content">
      <Link className="close-btn" style={logoStyle} to="/">
        ×
      </Link>
      <h1>Welocme to Team 3!</h1>
    </div>
  );
};

export default RegisterSuccess;
