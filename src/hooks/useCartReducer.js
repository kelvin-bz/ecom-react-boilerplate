
import { useReducer } from 'react';

// Define the initial state for the cart.
const initialCartState = {
  items: [],
  total: 0,
};

// The reducer function handles different action types.
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedItems = [...state.items, action.payload];
      const updatedTotal = state.total + action.payload.price;
      return { items: updatedItems, total: updatedTotal };
    }
    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (!itemToRemove) return state;
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const updatedTotal = state.total - itemToRemove.price;
      return { items: updatedItems, total: updatedTotal };
    }
    case 'CLEAR_CART':
      return initialCartState;
    default:
      return state;
  }
}

// Custom hook exposing cart state and dispatch functions.
const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return {
    items: state.items,
    total: state.total,
    addItem,
    removeItem,
    clearCart,
  };
};

export default useCartReducer;
