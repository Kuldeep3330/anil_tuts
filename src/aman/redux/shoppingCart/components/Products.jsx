import { useDispatch } from "react-redux"
import { addToCart } from "../features/cartSlice";


const Products=()=>{
    const dispatch=useDispatch()
    const product={id:1, name:"shirts"};

    return (
        <>
        <h2>Products</h2>
        <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
        </>
    )
}

export default Products