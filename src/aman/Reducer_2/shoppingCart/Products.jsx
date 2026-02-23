import { useContext } from "react";
import { CartContext } from "./cartContext";

const products = [
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "Shirt", price: 1000 }
];

function Products() {
    const { disptach } = useContext(CartContext);
    return (
        <div>
            <h2>Products</h2>
            {
                products.map(p => (
                    <div key={p.id}>
                        {p.name} - ₹{p.price}
                        <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: p })}>
                            Add
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products