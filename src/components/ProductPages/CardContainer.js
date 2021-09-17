import { useState } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import "./CardContainer.css";

const CardContainer = ({ products, cartItems, setCartItems }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  return (
    <>
      <div className="container-cardcontainer">
        {products?.rows.map((item) => (
          <Card
            key={item.id}
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
