import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <Link to="/weights">
          <div className="Weights-link">weights</div>
        </Link>
        <Link to="/calisthenics">
          <div className="Calis-link">Calisthenics</div>
        </Link>
        <Link to="/accessories">
          <div className="Access-link">Accessories</div>
        </Link>
      </div>
    </>
  );
};

export default Home;
