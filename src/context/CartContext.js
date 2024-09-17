
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.id === product.id);

      if (itemIndex !== -1) {
       
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };


  const increaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

 
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
