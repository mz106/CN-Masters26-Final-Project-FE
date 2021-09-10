import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  const [values, setValues] = useState({
    name: "",
    catagory: "",
    weight: "",
    size: "",
    price: 0,
    url: ""

  });

  const fetchProducts = async (event) => {
    try {
      const obj = JSON.stringify({
        name: values.name,
        catagory: values.catagory,
        weight: values.weight,
        size: values.size,
        price: values.price,
        url: values.url
      });
      console.log(obj)
      const res = await fetch("http://localhost:80/http://localhost/admin", {
        mode: "cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: obj,
      });
      console.log(res)
      const data = await res.json();
      console.log( data );
    } catch (error) {
      console.error(error);
    }
    console.log("fetchProducts end")
  };
  return (
    <>
      <div className="home-container">
        <Link to="/weights">
          <div className="Weights-link" onClick={fetchProducts}>
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
