import React,{useState} from 'react';
import fetchProducts from "./ProductPages/functions";


function Cart() {
    const {products}=fetchProducts;
    const [cartItems, setCartItems] = useState([]);
    const AddItems = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const RemoveItems = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className='block col-1' >
      <div>
        {cartItems.length === 0 && <div>Your Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
              <cartItems products={products} AddItems={AddItems}/>
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => RemoveItems(item)} className="remove">
              Delete Item
              </button>{' '}
              <button onClick={() => AddItems(item)} className="add">
              Add Item
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        </div>
    </div>
      );
}


export default Cart;