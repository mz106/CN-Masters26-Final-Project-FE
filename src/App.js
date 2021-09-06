import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
        <Account />
        <Signup />
        <Login />
      </header>
    </div>
  );
}

export default App;
