import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <Link to="/weights">
          <div className="Weights-link">
            <h1 className="filter-title">Weights</h1>
          </div>
        </Link>
        <Link to="/calisthenics">
          <div className="Calis-link">
            <h1 className="filter-title">Calisthenics</h1>
          </div>
        </Link>
        <Link to="/accessories">
          <div className="Access-link">
            <h1 className="filter-title">Accessories</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
