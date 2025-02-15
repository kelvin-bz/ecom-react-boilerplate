import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import styles from './Collection.module.css';

const Collection = ({ type }) => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Determine collection title based on route
    const collectionType = type || id;
    let collectionTitle;
    switch (collectionType) {
      case 'hot-deals':
        collectionTitle = 'Hot Deals';
        break;
      case 'new-arrivals':
        collectionTitle = 'New Arrivals';
        break;
      case 'recommended':
        collectionTitle = 'Recommended For You';
        break;
      default:
        collectionTitle = `Collection ${id}`;
    }

    setCollection({
      id: collectionType,
      name: collectionTitle,
      description: `Explore our ${collectionTitle.toLowerCase()} collection.`,
    });

    // Sample data without images
    setProducts([
      { id: 1, name: 'Product 1', price: 19.99 },
      { id: 2, name: 'Product 2', price: 24.99 },
      { id: 3, name: 'Product 3', price: 29.99 },
      { id: 4, name: 'Product 4', price: 34.99 },
      { id: 5, name: 'Product 5', price: 39.99 },
      { id: 6, name: 'Product 6', price: 44.99 },
      { id: 7, name: 'Product 7', price: 49.99 },
      { id: 8, name: 'Product 8', price: 54.99 },
      { id: 9, name: 'Product 9', price: 59.99 },
      { id: 10, name: 'Product 10', price: 64.99 },
    ]);
  }, [id, type]);

  if (!collection) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.collectionPage}>
      <h1>{collection.name}</h1>
      <p className={styles.description}>{collection.description}</p>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
