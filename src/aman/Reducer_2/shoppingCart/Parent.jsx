import Cart from "./Cart";
import CartProvider from "./CartProvider";
import Products from "./Products";

function Parent()
{

    <CartProvider>
      <Products/>  
      <Cart/>
    </CartProvider>

}
export default Parent;