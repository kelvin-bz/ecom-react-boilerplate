import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // For demo purposes, using static data.
    // Replace this with an API call in a real app.
    setProducts([
      { id: 1, name: 'Product 1', price: 29.99 },
      { id: 2, name: 'Product 2', price: 39.99 },
      { id: 3, name: 'Product 3', price: 19.99 },
    ]);
  }, []);

  return (
    <div className={styles.home}>
      <h1>Featured Products</h1>
      <div className={styles.productGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;