import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { totalAmount } = useContext(CartContext);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <p>Total: ${totalAmount.toFixed(2)}</p>
      <button onClick={() => alert('Order Placed!')}>Place Order</button>
    </div>
  );
};

export default Checkout;
