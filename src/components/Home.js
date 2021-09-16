import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [values, setValues] = useState({
    name: "",
    catagory: "",
    weight: "",
    size: "",
    price: 0,
    url: "",
  });

  // };
  return (
    <>
      <div className="top-content">
        <div className="home-title">
          TM<span className="three">3</span>
        </div>
        <div className="sub">Focus On Your Goals, The Rest Is Just Noise</div>
      </div>
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
