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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";


import "./App.css";

function App() {


  const [auth, setAuth] = useState({
    auth_status: false,
    email: "",
    token: ""
  }); 
  

  const [cartItems, setCartItems] = useState([]);


  return (
    <>
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/cart">
            { auth.auth_status ? <Cart  auth={auth} setAuth={setAuth}/> : <Redirect to="/login" /> }
            </Route>  
            <Route 
            path="/login"
            exact
            component={() => 
              <Login auth={auth} setAuth={setAuth} />
            }
            />

            <Route
              path="/cart"
              exact
              component={() => (
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              )}
            />
            <Route path="/login" exact component={Login} />

            <Route path="/signup" exact component={Signup} />
            <Route
              path="/weights"
              exact
              component={() => (
                <Weights cartItems={cartItems} setCartItems={setCartItems} />
              )}
            />
            <Route
              path="/accessories"
              exact
              component={() => (
                <Accessories
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              )}
            />
            <Route
              path="/calisthenics"
              exact
              component={() => (
                <Calisthenics
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              )}
            />
          </Switch>
          
        </div>
      </Router>
    </>
  );
}

export default App;
