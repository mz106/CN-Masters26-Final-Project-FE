import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Register/Signup";
import Cart from "./components/Cart";
import Weights from "./components/ProductPages/Weights";
import Accessories from "./components/ProductPages/Accessories";
import Calisthenics from "./components/ProductPages/Calisthenics";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';

import "./App.css";

function App() {

  const [auth, setAuth] = useState([]); 
  
  // useEffect((userAuth)=> {
  //   setUserAuth(true)
  //   console.log(userAuth)
  // });
  
  // console.log(userAuth)

  // const handleChange = (e) => {
  //   // e.preventDefault()
  //   // setUserAuth({
  //   //   email: "dave@email.com",
  //   //   secret_token: "sldbksdbvkubsbdv",
  //   //   auth_status: true
  //   // })
  //   console.log("thin button is clicked")
  // }

  

  // const [userAuth, setUserAuth] = useState(null)

      
//   const [authState, setAuthState] = useState(false);

//   useEffect(async () => {
//     console.log("useEffect app.js hit")
    
//     const secret_token = localStorage.getItem("token");
//     const res = await fetch(`http://localhost/user/profile?secret_token=${secret_token}`, {
//       mode: "cors",
//       method: "get",
//       headers: { "Content-Type": "application/json", token: localStorage.getItem("token")}
      
//     });
//     console.log(res.headers)
//     console.log("use effect done fetch")
//     console.log(res)
//     const data = await res.json();
//     console.log(data)
//     // if (data.token) {
//     //   setAuthState(true);
//     //   console.log(authState, data)
//     // } else {
//     //   setAuthState(true);
//     //   console.log(authState, data)
//     // }
//   },[]);

  return (
    <>
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/cart">
            { auth ? <Cart  auth={auth} setAuth={setAuth}/> : <Redirect to="/login" /> }
            </Route>  
            {/* { !userAuth ? <Route path="/cart" exact component={Cart} userAuth={userAuth} setUserAuth={setUserAuth}/> : <Redirect to="/login" /> } */}
            {/* <Route path="/cart" exact component={Cart} userAuth={userAuth} setUserAuth={setUserAuth}/>  */}
            <Route path="/login" exact component={Login} auth={auth} setAuth={setAuth}/>
            <Route path="/signup" exact component={Signup} />
            <Route path="/weights" exact component={Weights} />
            <Route path="/accessories" exact component={Accessories} />
            <Route path="/calisthenics" exact component={Calisthenics} />
          </Switch>
          
        </div>
      </Router>
    </>
  );
}

export default App;
