import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const orderSummaryItems = useSelector((store) => store.ordersummary.items);

  return (
    <div>
      <h2>Order Summary</h2>
      {orderSummaryItems.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Address: {item.address}</p>
          <p>Ordered Items: 
            {item.cartItems}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;
