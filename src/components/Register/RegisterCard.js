import React from "react";
import validate from "./validateInfo";
import UseRegister from "./UseRegister";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const RegisterSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseRegister(
    submitForm,
    validate
  );

  const history = useHistory();

  const signup = async (event) => {
    try {
      const obj = JSON.stringify({
        email: values.email,
        password: values.password,
      });

      const res = await fetch(`${BASE_URL}/user/register`, {
        mode: "cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: obj,
      });
      const data = await res.json();
      console.log({ data });
      if (data.auth === true) {
        localStorage.setItem("token", data.token);
        history.push("/");
        console.log(history);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register-Content">
      
      <div className="register-img"></div>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1 className="register-title">
          Get started with us <span className="register-title-span">today</span>! Create your free{" "}
          <span className="CompanyName">Tm3</span> Cart by filling out the
          information below.
        </h1>
      
       
          <div className="register-inputs">
            <label className="register-label">Email</label>
            <input
              className="register-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        
          <div className="register-inputs">
            <label className="register-label">Password</label>
            <input
              className="register-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <button className="register-input-btn" type="submit" onClick={signup}>
            Sign up
          </button>
          <span className="register-input-login">
            Already have an Account? <Link to="/login" className="register-login-btn">LOGIN HERE </Link>
          </span>
        
      </form>
    </div>
  );
};

export default RegisterSignup;
