import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Register/Signup";
import Account from "./components/Account";
import Weights from "./components/ProductPages/Weights";
import Accessories from "./components/ProductPages/Accessories";
import Calisthenics from "./components/ProductPages/Calisthenics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/account" exact component={Account} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/weights" exact component={Weights} />
            <Route path="/accessories" exact component={Accessories} />
            <Route path="/calisthenics" exact component={Calisthenics} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
