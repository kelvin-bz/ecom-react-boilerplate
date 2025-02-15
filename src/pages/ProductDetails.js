import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  // In a real app, you would fetch product details using the id.
  return (
    <div className={styles.details}>
      <h1>Product Details for ID: {id}</h1>
      {/* Additional product details go here */}
    </div>
  );
};

export default ProductDetails;