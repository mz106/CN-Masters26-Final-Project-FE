
import { useState } from "react";

import Card from "./Card";
import "./CardContainer.css";


const CardContainer = ( { products } ) => {
    
    return (
        <>
        <div className="container-cardcontainer">
            {products.rows.map((item) => (<Card key={item.name} item={item}/>))}
        </div>
        </>
    );
};

export default CardContainer
