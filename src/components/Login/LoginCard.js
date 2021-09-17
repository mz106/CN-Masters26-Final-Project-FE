import validate from "../Register/validateInfo";
import UseLogin from "./UseLogin";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const LoginCard = ({ submitForm, auth, setAuth }) => {
  const { handleChange, handleSubmit, values, errors } = UseLogin(
    submitForm,
    validate
  );



const LoginCard = ( { submitForm, auth, setAuth }) => {
        const { handleChange, handleSubmit, values, errors } = UseLogin(
            submitForm,
            validate
          );
      
        const login = async (e) => {
            
            try {
              const obj = JSON.stringify({
                email: values.email,
                password: values.password
              });
        
              const res = await fetch(`${BASE_URL}/user/login`, {
                mode: "cors",
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: obj,
              });
              const data = await res.json();
              


      setAuth({
        ...auth,
        auth_status: data.auth_status,
        email: data.email,
        token: data.secret_token,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-Content">
      <div className="register-img-login"></div>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1 className="register-title">Login</h1>
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

        <button
          className="register-input-btn login-btn"
          type="submit"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginCard;
