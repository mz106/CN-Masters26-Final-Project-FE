import { useState } from "react";
import LoginCard from "./LoginCard";
import LoginSuccess from "./LoginSuccess";

const Login =  ({ auth, setAuth }) => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
          <LoginCard submitForm={submitForm} auth={auth} setAuth={setAuth}  />
        ) : (
          <LoginSuccess  />
        )}
    </div>
  );  
};

export default Login;
