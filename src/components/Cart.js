import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    //route to checkout page
    navigate('/checkout');
  }
  
  return (
    <div>
      <ul className="list-group">
        {cartItems.map((items) => (
          <li className="list-group-item">{items}</li>
        ))}
        {cartItems.length ? (
          <li
            className="list-group-item list-group-item-danger"
            onClick={handleClearCart}
          >
            Clear all items
          </li>
        ) : (
          <li class="list-group-item list-group-item-primary">
            Your cart is empty.. add some items!
          </li>
        )}
       
      

        {/* Wrong way to use map { cartItems.map( (arg) => arg ) } */}
      </ul>
      <a href="#" className="btn btn-primary" onClick = { handleCheckout } >
          Checkout
      </a>
    </div>
    
  );
}

export default Cart;
