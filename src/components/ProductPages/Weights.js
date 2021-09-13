
import { useState } from "react";
import CardContainer from "./CardContainer";
import { fetchProducts } from "./functions.js";
import { useQuery } from "react-query";
import React from "react";

const Weights = () => {
 
  const [page, setPage] =useState(1);
  const limit = 6;
  const offset = 1;
  const { data, status} = useQuery(['products', limit, offset], () => fetchProducts(limit, offset));
  const getLastPage = () => Math.ceil((data.count || 0) / limit);
  console.log(getLastPage())
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
        <button onClick={() => setPage(1)}>First</button>
        <button onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={!data}>Prev</button>
        <span> { page } of {getLastPage()}</span>
        <button onClick={() => setPage(old=> (!data || old === 3 ? old:old+1))} disabled={!data || data.next}>Next</button>
        <button onClick={() => setPage(getLastPage())}>Last</button>
        </>
      )} 
    </>
  );
}

// 1. const {data, status} = useQuery(['planets', page], ()=>fetchPlanet(page) );
// 2. data.results.map(...)
// 3. setPages(old=> (!data || !data.next ? old:old+1))}

export default Weights;
