import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import { fetchProducts } from "./functions.js";
import Card from "./Card";
import { useQuery } from "react-query";

const Weights = () => {
  
  
  const { data, status} = useQuery('products', fetchProducts);
  
  return (
    <>
      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          
          <CardContainer products={data}/>
          
        </div>
      )} 
    </>
  );
}

export default Weights;
