
import { useState } from "react";

import Card from "./Card";
import CardSubContainer from "./CardSubContainer";
import "./CardContainer.css";


const CardContainer = ( { products } ) => {
    const [hasLoaded, setHasLoaded] = useState(false);
    return (
        <>
        <div className="container-cardcontainer">
            {/* {products.rows.map((item) => (<Card key={item.name} item={item}/>))} */}
            <CardSubContainer products={products}/>
        </div>
        </>
    );
};

export default CardContainer
