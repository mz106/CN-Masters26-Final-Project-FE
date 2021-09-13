
import { useState } from "react";
import CardContainer from "./CardContainer";
import { fetchProducts } from "./functions.js";
import { useQuery } from "react-query";
import React from "react";

const Weights = () => {
 
  const [page, setPage] =useState(3);
  const limit = 6;
  const offset = 7;
  const { data, status} = useQuery(['products', page, limit, offset], () => fetchProducts(page, limit, offset));
  
  return (
    <>
      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <>
        <div>
          <CardContainer products={data}/>
        </div>
        <button onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={!data}>Prev</button>
        <span> { page }</span>
        <button onClick={() => setPage(old=> (!data || old === 3 ? old:old+1))} disabled={!data || data.next}>Next</button>
        </>
      )} 
    </>
  );
}

// 1. const {data, status} = useQuery(['planets', page], ()=>fetchPlanet(page) );
// 2. data.results.map(...)
// 3. setPages(old=> (!data || !data.next ? old:old+1))}

export default Weights;
