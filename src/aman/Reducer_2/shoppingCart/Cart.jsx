
function Cart(){

    return (
        <div>
            <h2>Cart</h2>
            {cartReducer.map(item=>(
                <div key={item.id}>
                   {item.name} - ₹{item.price} × {item.quantity}

                   <button onClick={() => dispatch({ type: "INCREASE", payload: item.id })}>+</button>
                    <button onClick={() => dispatch({ type: "DECREASE", payload: item.id })}>-</button>
                    <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>Remove</button>
                    </div>

            ))}
        <h3>Total: ₹{total}</h3>
    </div>
    )

}

export default Cart;
