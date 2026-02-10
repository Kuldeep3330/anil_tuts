import CartProvider from "./CartProvider";
import Navbar from "./Navbar";
import Products from "./Products";
import CartComponent from "./CartComponent";

function Cart() {
  return (
    <CartProvider>
      <Navbar />
      <Products />
      <CartComponent />
    </CartProvider>
  );
}

export default Cart;
