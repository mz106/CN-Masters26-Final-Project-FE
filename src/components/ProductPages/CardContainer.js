
import { useState } from "react";

import Card from "./Card";
import "./CardContainer.css";

const CardContainer = ( { products } ) => {
    console.log("card container", products)
    return (
        <>
        <div className="container-cardcontainer">
            {products.map((item) => (<Card item={item}/>))}
        </div>
        </>
    );
};

export default CardContainer
