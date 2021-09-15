
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import validate from '../Register/validateInfo';
import UseLogin from './UseLogin';

const LoginCard = ( { submitForm }) => {
        const { handleChange, handleSubmit, values, errors } = UseLogin(
            submitForm,
            validate
          );

        const [isLoggedIn, setIsLoggedIn] = useState(false);
        const [token, setToken] = useState("");
        
        let history = useHistory();
        
        const login = async (event) => {
            try {
              const obj = JSON.stringify({
                email: values.email,
                password: values.password
              });
        
              const res = await fetch("http://localhost/user/login", {
                mode: "cors",
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: obj,
              });
              const data = await res.json();
              console.log(data)
              if (data.auth === true) {
                localStorage.setItem("token", data.token);
                history.push("/");
                console.log(history)
              } 
              
              return data

            } catch (error) {
              console.error(error);
            }
            
          };
          
          // useEffect(async () => {
          //   const result = await login()
          //       if (result.auth === true) {
          //       setIsLoggedIn(true)
          //       console.log(isLoggedIn)
          //       setToken(result.token)
          //       console.log(token) 
          //   } else {
          //       console.log("auth false")
          //   }
          // });
          
          

          return (
            <div className="register-Content">
              <form onSubmit={handleSubmit} className="form" noValidate>
                <h1>
                  Login
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
        
                <button className="register-input-btn" type="submit" onClick={login}>
                  Login
                </button>
              </form>
            </div>
          );
    
}

export default LoginCard;