import React, { useState } from 'react';
import productsData from '../data/product';

const Cart = () => {
 
  const [cartItems, setCartItems] = useState(
    productsData.map((product) => ({
      ...product,
      quantity: 1,
    }))
  );


  const incrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const decrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container">
      <h1>Your Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <img src={item.image} alt={item.title} className="product-image" />
              </td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => decrementQuantity(item.id)} disabled={item.quantity === 1}>
                  -
                </button>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-section">
        <h3>Summary</h3>
        <p className="total-quantity">Total Quantity: {totalQuantity}</p>
        <p className="total-amount">Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default Cart;
