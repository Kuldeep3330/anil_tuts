import { useContext } from "react";
import { cartContext } from "./cartContext";

function CartComponent() {
  const { cart, dispatch } = useContext(cartContext);

  return (
    <div>
      <h2>Cart Items</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id}>
          {item.name} (Qty: {item.quantity})
          <button
            onClick={() =>
              dispatch({
                type: "DECREASE_QTY",
                payload: item.id
              })
            }
          >
            -
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartComponent;
