import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addtoOrderSummary } from "../utils/OrderSummarySlice";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false); // New state for order placement
  const cartItems = useSelector((store) => store.cart.items);

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  const handleAddToOrderSummary = (e) => {
    e.preventDefault();
    // Create a payload with the form data
    const formData = {
      name,
      email,
      address,
      cartItems
    };
    // Dispatch the action with the payload
    dispatch(addtoOrderSummary(formData));
    setOrderPlaced(true);
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Address:
          <textarea name="address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </label>
        <button onClick={handleAddToOrderSummary}>Place Order</button>
      </form>
      {orderPlaced && <p>Your order has been successfully placed!</p>}
    </div>
  );
};

export default CheckoutForm;
