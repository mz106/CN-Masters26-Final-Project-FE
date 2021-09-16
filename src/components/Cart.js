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
