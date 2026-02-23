import { useReducer } from "react";
import { CartContext } from "./cartContext";
import { cartReducer } from "./cartReducer";


function CartProvider({children}){
    const[state, dispatch]=useReducer(cartReducer,[])
    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider