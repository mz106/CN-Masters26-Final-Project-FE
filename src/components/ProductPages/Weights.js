import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import fetchProducts from "./functions.js";
import React from "react";
import "./Weights.css";

const Weights = ({ cartItems, setCartItems }) => {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(6);
  const [products, setProducts] = useState({ count: 0, rows: [] });
  const cat = "Weight";
  const getLastPage = () => Math.ceil((products?.count || 0) / limit);

  useEffect(
    () => (async () => setProducts(await fetchProducts(limit, offset, cat)))(),
    [offset]
  );

  return (
    <>
      <div>
        <div className="img-container">
          {" "}
          <h1 className="slogan">Lift heavy</h1>
          <div className="second-img"></div>
        </div>

        <CardContainer
          products={products}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
      <div className="pages-buttons">
        <button
          className="page-button"
          onClick={() => {
            setPage(1);
            setOffset(0);
          }}
        >
          First
        </button>
        <button 
          className="page-button"
          onClick={() => {
            if (page === 1) {
              setPage(1)
              setOffset(0)
            } else {
              setPage((old) => Math.max(old - 1));
              setOffset(offset - (limit - 1));
            }
          }}
        >
          prev
        </button>
        <span>
          {" "}
          {page} of {getLastPage()}
        </span>
        <button
          className="page-button"
          onClick={() => {
          //   
            setPage((old) => (!products || old === ((products.count - (products.count % limit)) / limit) ? old : old + 1));
            setOffset((page - 1) * limit + 1)
          }
        }
        >
          Next
        </button>
        <button
          className="page-button"
          onClick={() => {
            setPage(getLastPage());
            if (products.count % limit === 0) {
              setOffset(products.count - limit)
            } else {
              setOffset(products.count - (products.count % limit));
            }  
          }}
        >
          Last
        </button>
      </div>
    </>
  );
};

export default Weights;
