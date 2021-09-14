
import { useState } from "react";

import Card from "./Card";
import "./CardContainer.css";


const CardContainer = ( { products } ) => {
    const [hasLoaded, setHasLoaded] = useState(false);
    return (
        <>
        <div className="container-cardcontainer">
            {products.rows.map((item) => (<Card key={item.id} item={item}/>))}
        </div>
        </>
    );
};

export default CardContainer
