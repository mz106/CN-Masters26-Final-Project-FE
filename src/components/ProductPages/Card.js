import React from "react";
import "./Card.css";
import { RiShoppingCart2Line } from "react-icons/ri";

const Card = ({ item, cartItems, setCartItems }) => {
  console.log(cartItems, "cartItems Card.js")
  return (
    <div className="container-card">
      <div className="card-img-container">
        <img src={item.url} className="card-img" />
      </div>
      <div className="add-basket">
        <h1
          className="basket-btn"
          onClick={() => setCartItems([...cartItems, item])}
        >
          <RiShoppingCart2Line />
        </h1>
      </div>
      <div className="info">
        <p className="Product-name">{item.name}</p>
        <p className="Product-weight">{item.weight}</p>
        <p className="Product-price">£{item.id}</p>
      </div>
    </div>
  );
};

export default Card;
