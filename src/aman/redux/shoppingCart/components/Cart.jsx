import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../features/cartSlice";

const Cart=()=>{
    const cart=useSelector(state=>state.cart)
    const dispatch=useDispatch()

    return (<>
    <h2>Cart</h2>
    {
        cart.map(item=>(
            <div key={item.id}>
                {item.name}
                <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
            
        ))
    }
    {
        cart.length>0 && (
            <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        )
    }
    </>)
}

export default Cart;