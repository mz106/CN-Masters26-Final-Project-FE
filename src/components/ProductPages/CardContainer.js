
import { useState } from "react";

import Card from "./Card";
import "./CardContainer.css";

const CardContainer = () => {

    //this is a temp use state to get visuals
    const [name, setName] = useState([
        {
            name: "fred"
        },
        {
            name: "dave"
        },
        {
            name: "alice"
        },
        {
            name: "joe"
        },
        {
            name: "norman"
        },
        {
            name: "james"
        },
        {
            name: "bond"
        },
        {
            name: "hudson"
        },
        {
            name: "ripley"
        },
    ]);

    return (
        <div className="container-cardcontainer">
            {name.map((item) => (<Card name={item}/>))}
        </div>
    );
};

export default CardContainer
