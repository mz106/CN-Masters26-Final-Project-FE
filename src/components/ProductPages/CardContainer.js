
import { useState } from "react";

import Card from "./Card";
import "./CardContainer.css";

const CardContainer = ( {products} ) => {

    // this is a temp use state to get visuals
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

//      const [values, setValues] = useState({
//     name: "",
//     catagory: "",
//     weight: "",
//     size: "",
//     price: 0,
//     url: ""

//   });

//   const fetchProducts = async (event) => {
//       event.preventDefault();
//     try {
//       const obj = JSON.stringify([{
//         name: values.name,
//         catagory: values.catagory,
//         weight: values.weight,
//         size: values.size,
//         price: values.price,
//         url: values.url
//       }]);
//       console.log(obj)
//       const res = await fetch("http://localhost/admin/getproducts", {
//         mode: "cors",
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: obj,
//       });
//       console.log(res)
//       const data = await res.json();
//       console.log( {data} );
//       setValues({
//           name: data.name
//       })
//       console.log(values, "These are the values")
//     } catch (error) {
//       console.error(error);
//     }
//     console.log("fetchProducts end")
//     console.log(values.name)
//   };

//   fetchProducts();

    return (
        <>
        <div className="container-cardcontainer">
            {products.map((item) => (<Card item={item}/>))}
            {/* <Card /> */}
        </div>
        </>
    );
};

export default CardContainer
