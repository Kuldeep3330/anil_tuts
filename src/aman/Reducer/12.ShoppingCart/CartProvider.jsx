import { useReducer } from "react";
import { cartContext } from "./cartContext";
import { cartReducer } from "./cartReducer";

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
