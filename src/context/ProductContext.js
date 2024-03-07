// ProductContext.js
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children, products }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    alert(`The item ${product.title} added to the cart!`);
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item is already in the cart, update the quantity
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  return (
    <ProductContext.Provider value={{ products, cartItems, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};
