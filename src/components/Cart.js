import "./cart.css";
import { BsTrash } from "react-icons/bs";

function Cart({ cartItems, setCartItems, auth, setAuth }) {
  console.log(cartItems, "on Cart.js");
  const deleteItem = (id) => {
    if (id) {
      setCartItems([...cartItems.slice(0, id), ...cartItems.slice(id)]);
    } else setCartItems(cartItems.slice(1));
  };

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
        <div className="cart-container-right">
          <div className="checkout">
            <div className="total">
              <h1 className="total-price">'£0'</h1>
            </div>
            <button className="checkout-btn"> CHECKOUT </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
