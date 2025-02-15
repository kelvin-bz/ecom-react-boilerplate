import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import styles from './Collection.module.css';

const Collection = ({ type }) => {
  const { id } = useParams();
  const location = useLocation();
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

    // Here you would typically fetch products based on the collection type
    // For now, using sample data
    setProducts([
      { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/200' },
      { id: 2, name: 'Product 2', price: 24.99, image: 'https://via.placeholder.com/200' },
      { id: 3, name: 'Product 3', price: 29.99, image: 'https://via.placeholder.com/200' },
      // Add more products...
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
