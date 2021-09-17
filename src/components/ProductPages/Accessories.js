import React from "react";
import "./Access.css";
import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import fetchProducts from "./functions.js";

const Accessories = ({ cartItems, setCartItems }) => {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(6);
  const [products, setProducts] = useState({ count: 0, rows: [] });
  const cat = "Accessories";
  const getLastPage = () => Math.ceil((products?.count || 0) / limit);

  useEffect(
    () => (async () => setProducts(await fetchProducts(limit, offset, cat)))(),
    [offset]
  );

  return (
    <>
      <div>
        <div className="A-img-container">
          {" "}
          <h1 className="A-slogan">
            TM<span className="three-sub">3</span> LOOK
          </h1>
          <div className="A-second-img"></div>
        </div>

        <CardContainer
          products={products}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
      <div className="pages-buttons">
        <button
          onClick={() => {
            setPage(1);
            setOffset(0);
          }}
        >
          First
        </button>
        <button
          onClick={() => {
            setPage((old) => Math.max(old - 1, 1));
            setOffset(offset - (limit - 1));
          }}
        >
          prev
        </button>
        <span>
          {" "}
          {page} of {getLastPage()}
        </span>
        <button
          onClick={() => {
            setPage((old) => (!products || old === 3 ? old : old + 1));
            setOffset(offset + (limit - 1));
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            setPage(getLastPage());
            setOffset(products.count - (products.count % limit));
          }}
        >
          Last
        </button>
      </div>
    </>
  );
};

export default Accessories;
