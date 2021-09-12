
import { useState } from "react";
import CardContainer from "./CardContainer";
import { fetchProducts } from "./functions.js";
import { useQuery } from "react-query";
import React from "react";

const Weights = () => {
 
  const [page, setPage] =useState(1);
  const limit = 6;
  const { data, status} = useQuery(['products', page, limit], () => fetchProducts(page, limit));
  console.log(data)
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
          <button onClick={() => setPage(1)}>page 1</button>
          <button onClick={() => setPage(2)}>page 2</button>
          <button onClick={() => setPage(3)}>page 3</button>
        </div>
      )} 
    </>
  );
}

export default Weights;
