
import React from 'react'

import Card from './Card';
import "./CardSubContainer.css";

const CardSubContainer = ({ products }) => {
    return (
        <div className="container-sub">
            {products.rows.map((item) => (<Card key={item.id} item={item}/>))}          
        </div>
    )
};

export default CardSubContainer;
