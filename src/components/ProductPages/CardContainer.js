import { useState } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import "./CardContainer.css";

const CardContainer = ({ products }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  return (
    <>
      <div className="img-container">
        {" "}
        <h1 className="slogan">Lift heavy</h1>
        <div className="second-img"></div>
      </div>

      <div className="container-cardcontainer">
        {products?.rows.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
