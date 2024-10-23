import { useState, useMemo } from "react";

const UseMemo = () => {
  const [cartItems, setCartItems] = useState([]);

  // useMemo ensures that totalPrice is only recalculated when cartItems change.
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
        </div>
      ))}
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default UseMemo
