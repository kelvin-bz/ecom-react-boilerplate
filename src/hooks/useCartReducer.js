import { useReducer, useEffect } from 'react';

// Get initial state from localStorage or use default
const getInitialState = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : {
    items: [],
    total: 0,
  };
};

// The reducer function handles different action types
function cartReducer(state, action) {
  let newState;
  
  switch (action.type) {
    case 'ADD_ITEM': {
      // Check if item already exists
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      let updatedItems;
      if (existingItem) {
        // If item exists, increment quantity
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item is new, add it with quantity 1
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      
      const updatedTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      
      newState = { items: updatedItems, total: updatedTotal };
      break;
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const updatedTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      newState = { items: updatedItems, total: updatedTotal };
      break;
    }
    
    case 'CLEAR_CART':
      newState = { items: [], total: 0 };
      break;
      
    default:
      return state;
  }
  
  // Save to localStorage after each update
  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
}

// Custom hook exposing cart state and dispatch functions
const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, null, getInitialState);

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
