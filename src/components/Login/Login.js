import { useState } from "react";
import LoginCard from "./LoginCard";
import LoginSuccess from "./LoginSuccess";

const Login = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
          <LoginCard submitForm={submitForm} />
        ) : (
          <LoginSuccess />
        )}
    </div>
  );  
};

export default Login;
