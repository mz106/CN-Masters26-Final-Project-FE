
import React from "react";

import "./Card.css";

const Card =  ({ item }) => {
    return (
        <div className="container-card">
            {/* <div className="card-img-container">
                <img src={item.url} className="card-img"/>
            </div> */}
            <p>{item.name}</p>
            <p>£{item.price}</p>
        </div>
    );
};

export default Card;