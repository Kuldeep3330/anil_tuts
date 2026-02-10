import { useContext } from "react";
import { cartContext } from "./cartContext";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

function Products() {
  const { dispatch } = useContext(cartContext);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
