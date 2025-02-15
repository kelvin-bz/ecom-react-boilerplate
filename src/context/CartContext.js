import React, { createContext, useContext } from 'react';
import useCartReducer from '../hooks/useCartReducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartState = useCartReducer();
  
  return (
    <CartContext.Provider value={cartState}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 