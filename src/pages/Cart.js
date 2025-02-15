import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { items, total, removeItem } = useCart();
  const navigate = useNavigate(); // Hook to navigate on click

  if (items.length === 0) {
    return (
      <div className={styles.cart}>
        <h1>Your Cart</h1>
        <p>Your cart is empty</p>
        <Link to="/" className={styles.continueShoppingLink}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      <div className={styles.cartItems}>
        {items.map((item) => (
          <div 
            key={item.id} 
            className={styles.cartItem} 
            onClick={() => handleProductClick(item.id)}
          >
            <div className={styles.greyBox}></div> {/* Grey Box Instead of Image */}
            <div className={styles.itemDetails}>
              <h3 className={styles.clickableTitle}>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button 
                onClick={(e) => { e.stopPropagation(); removeItem(item.id); }}
                className={styles.removeButton}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.cartSummary}>
        <h2>Cart Summary</h2>
        <p className={styles.total}>Total: ${total.toFixed(2)}</p>
        <Link to="/checkout" className={styles.checkoutButton}>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
