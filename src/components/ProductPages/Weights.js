
import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import fetchProducts from "./functions.js";
import React from "react";

const Weights = () => {
 
  const [page, setPage] =useState(1);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(6);
  const [products, setProducts] = useState({count: 0, rows: []});

  const getLastPage = () => Math.ceil((products.count || 0) / limit);
  
  useEffect(() => (async () => setProducts(await fetchProducts(limit, offset)))(), [offset]);


  return (
        <>
        <div>
          <CardContainer products={products}/>
        </div>
        <button onClick={() => {
          setPage(1); 
          setOffset(0)
          }}>First</button>
        <button onClick={() => {
          setPage(old => Math.max(old - 1, 1));
          setOffset(offset - (limit - 1))
        }
      } >Prev</button>
        <span> { page } of {getLastPage()}</span>
        <button onClick={() => {
          setPage(old=> (!products || old === 3 ? old:old + 1));
          setOffset(offset + (limit - 1))
          }
          }>Next</button>
        <button onClick={() => {
          setPage(getLastPage());
          setOffset(products.count - (products.count % limit));
          }
          }>Last</button>
        </>
      
    
  );
}

export default Weights;
