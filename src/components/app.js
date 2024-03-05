// App.js

import React, { useState } from 'react';
import Product from './Product';
import Wishlist from './Wishlist';

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd && !wishlist.some((product) => product.id === productId)) {
      setWishlist([...wishlist, productToAdd]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((product) => product.id !== productId));
  };
  const [cartItems, setCartItems] = useState([]);

  const handleCheckout = () => {

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} {...product} addToWishlist={addToWishlist} />
        ))}
      </div>
      <hr />
      <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
    </div>
    
  );
};
}

export default App;
