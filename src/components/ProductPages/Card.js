import React from "react";

import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="container-card">
      <div className="card-img-container">
        <img src={item.url} className="card-img" />
      </div>
      <div className="info">
        <p className="Product-name">{item.name}</p>
        <p className="Product-weight">{item.weight}</p>
        <p className="Product-price">£{item.price}</p>
      </div>
    </div>
  );
};

export default Card;
