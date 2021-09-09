import React, { useState } from "react";
import "./Register.css";
import RegisterCard from "./RegisterCard";
import RegisterSuccess from "./RegisterSuccess";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="register-Container">
        <div className="form-content-left">
          <div className="form-img" />
        </div>
        {!isSubmitted ? (
          <RegisterCard submitForm={submitForm} />
        ) : (
          <RegisterSuccess />
        )}
      </div>
    </>
  );
};

export default Signup;
