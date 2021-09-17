import "./cart.css";
import { BsTrash } from "react-icons/bs";

function Cart({ cartItems, setCartItems, auth, setAuth }) {
  console.log(cartItems, "on Cart.js");

  const deleteItem = (id) => {
    const remainder = cartItems.filter((item) => item.id !== id);
    console.log("id=" + id);

    setCartItems(remainder);
  };

  
   const Total = cartItems.reduce((a, c) => a + c.price , 0); 
 


  return (
    <>
      <div className="cart">
        <div className="cart-container-left">
          <ol>
            {cartItems.map((item, id) => {
              return (
                <div className="cart-items" key={id}>
                  <div className="cart-img-container">
                    <img
                      className="cart-img"
                      src={item.url}
                      alt="product img"
                    />
                  </div>
                  <div className="cart-info">
                    <p>{item.name}</p>
                    {""}
                    <p>{item.weight}</p>
                    <p>£{item.price}</p>
                  </div>
                  <div className="remove-btn" onClick={() => deleteItem(id)}>
                    <BsTrash />
                  </div>
                </div>
              );
            })}
          </ol>{" "}
        </div>
        {cartItems.length !== 0 && (
        <div className="cart-container-right">
          <div className="checkout">
            <div className="total">
            {""}
              <h1 className="total-price">£{Total} </h1>
            </div>
            <button className="checkout-btn"> CHECKOUT </button>
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default Cart;
