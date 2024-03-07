// Cart.js
import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import "./style/Cart.css"

const Cart = () => {
  const { cartItems, removeFromCart } = useProductContext();

  // State to track quantity for each item in the cart
  const [quantity, setQuantity] = useState({});

  // Function to update quantity for a specific item
  const updateQuantity = (itemId, newQuantity) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [itemId]: newQuantity,
    }));
  };

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (itemId) => {
    // Call removeFromCart function from the context to remove the item
    removeFromCart(itemId);
    // Also, update the quantity state to remove the item
    setQuantity((prevQuantity) => {
      const updatedQuantity = { ...prevQuantity };
      delete updatedQuantity[itemId];
      return updatedQuantity;
    });
  };

  // Calculate total price considering quantity
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemQuantity = quantity[item.id] || 1; // Default to 1 if quantity is not set
      return total + item.price * itemQuantity;
    }, 0);
  };

  return (
    <>
      <h2>Your Cart</h2>
      <div className="cart-container">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <p className="item-title">{item.title}</p>
            <p className="item-price">Price: ${item.price.toFixed(2)}</p>
            <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity-${item.id}`}
              value={quantity[item.id] || 1}
              min={1}
              className="quantity-input"
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
            />
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </div>
        </div>
      ))}
    </div>
    <p className="total-price">Total Price: ${calculateTotalPrice().toFixed(2)}</p>
    </>
  
  );
};

export default Cart;
