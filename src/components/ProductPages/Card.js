
import React from "react";

import "./Card.css";

const Card =  ({ item, AddItems }) => {
    return (
        <div className="container-card">
            <div className="card-img-container">
                <img src={item.url} className="card-img"/>
            </div>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>£{item.price}</p>
            <div>
                <button onClick={()=>AddItems(item) }>Add to Cart </button>
                </div>
        </div>
        
    );
};

export default Card;