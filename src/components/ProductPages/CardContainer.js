
import { useState } from "react";

import Card from "./Card";
import "./CardContainer.css";

const API_URL = "http://localhost/admin";

const CardContainer = () => {

    //this is a temp use state to get visuals
    // const [name, setName] = useState([
    //     {
    //         name: "fred"
    //     },
    //     {
    //         name: "dave"
    //     },
    //     {
    //         name: "alice"
    //     },
    //     {
    //         name: "joe"
    //     },
    //     {
    //         name: "norman"
    //     },
    //     {
    //         name: "james"
    //     },
    //     {
    //         name: "bond"
    //     },
    //     {
    //         name: "hudson"
    //     },
    //     {
    //         name: "ripley"
    //     },
    // ]);

    return (
        <>
        <div className="container-cardcontainer">
            {/* {product.map((item) => (<Card product={item}/>))} */}
            <Card />
        </div>
        </>
    );
};

export default CardContainer
