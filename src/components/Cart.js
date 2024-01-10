import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length === 0 ? (
        "Empty cart. Add items to the card"
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
