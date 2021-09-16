
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function Cart( { auth, setAuth }) {

  

  return <div>Cart</div>;

function Cart({ cartItems, setCartItems }) {
  return (
    <>
      <ol>
        {cartItems.map((item, id) => {
          return (
            <li key={id}>
              {item.name}:£{item.price}
            </li>
          );
        })}
      </ol>
    </>
  );

}

export default Cart;
