import { useContext } from "react";
import { CartContex } from "../store/MyContext";

const Cart = () => {
  const { cart, Additems, RemoveItems } = useContext(CartContex);

  return (
    <div>
      <p>Cart: {cart.join(", ")}</p>
      <button onClick={() => Additems("Apple")}>Add Items</button>
      <button onClick={() => RemoveItems("Apple")}>Join Items</button>
    </div>
  );
};

export default Cart;
