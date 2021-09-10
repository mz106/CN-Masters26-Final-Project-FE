
import React from "react";

import "./Card.css";

const Card =  ({item}) => {
    return (
        <div className="container-card">
            <div>{item.name}</div>
        </div>
    );
};

export default Card;