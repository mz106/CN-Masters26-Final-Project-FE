import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";

const Weights = () => {

  const [products, setProducts] = useState([]);

  useEffect ( async () => {
    const fetchProducts = async (event) => {
      try {
        
        const res = await fetch("http://localhost/admin/", {
          mode: "cors",
          method: "get",
          headers: { "Content-Type": "application/json" }
        });
        
        const data = await res.json();
        setProducts(data);
        
        for (let product of data) {
          console.log(product.name)
        }
        
        
        
      } catch (error) {
        console.error(error);
      }
      console.log("fetchProducts end")
      
    };
    
    await fetchProducts();
    
  }, []);
  
  return (
    <>
      {/* <div>
        {products.map(product => {
        return <h1>{product.name}</h1>
        })}
      </div> */}
      <CardContainer products={products}/>
    </>
  );
}

export default Weights;
