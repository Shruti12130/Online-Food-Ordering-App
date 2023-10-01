import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList"

const Cart = () => {

  const cartItems  = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div>
        <button type="button" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length == 0 && 
          (<div><br /><h3> It seems your card is empty, please add items to cart!</h3><br /></div>)}
        <ItemList items={cartItems}/>
      </div>
    </div>
  );
};

export default Cart;