import { useContext } from "react";
import { cartContext } from "./cartContext";

function Navbar() {
  const { cart } = useContext(cartContext);

  // derived state
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return <h3>🛒 Cart ({totalItems})</h3>;
}

export default Navbar;
