import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Register/Signup";
import Cart from "./components/Cart";
import Weights from "./components/ProductPages/Weights";
import Accessories from "./components/ProductPages/Accessories";
import Calisthenics from "./components/ProductPages/Calisthenics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

import "./App.css";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/weights" exact component={Weights} />
            <Route path="/accessories" exact component={Accessories} />
            <Route path="/calisthenics" exact component={Calisthenics} />
          </Switch>
        </div>
        <Footer/>
      </Router>
      </QueryClientProvider>  
    </>
  );
}

export default App;
