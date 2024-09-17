
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="100" />
              <div>
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
