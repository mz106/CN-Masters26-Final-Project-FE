
import React from "react";

import "./Card.css";

const Card = ({ name }) => {
    return (
        <div className="container-card">
            <h1>{name.name}</h1>
        </div>
    );
};

export default Card;