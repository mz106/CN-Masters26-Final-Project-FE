import React from "react";
import validate from "./validateInfo";
import UseRegister from "./UseRegister";
import "./Register.css";
import { Link } from "react-router-dom";

const RegisterSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseRegister(
    submitForm,
    validate
  );
  const signup = async (event) => {
    try {
      const obj = JSON.stringify({
        name: values.username,
        email: values.email,
        password: values.password,
      });

      //   const res = await fetch("http://localhost/user/register", {
      //     mode: "cors",
      //     method: "post",
      //     headers: { "Content-Type": "application/json" },
      //     body: obj,
      //   });
      //   const data = await res.json();
      //   console.log({ data });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register-Content">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Get started with us today! Create your free{" "}
          <span className="CompanyName">Tm3</span> account by filling out the
          information below.
        </h1>
        <div className="register-inputs">
          <label className="register-label">Username</label>
          <input
            className="register-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
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
          Already have an account? <Link to="/login">LOGIN HERE </Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterSignup;
