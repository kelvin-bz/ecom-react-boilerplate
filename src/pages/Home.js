import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';
import Banner from '../components/Banner'; // Import Banner component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [hotDeals, setHotDeals] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const scrollProducts = (direction, sectionId) => {
    const container = document.getElementById(sectionId);
    // Scroll by 3 products at a time (280px product width + 20px gap = 300px)
    const scrollAmount = direction === 'left' ? -900 : 900; // 3 * 300px
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    // Sample static data without images
    setHotDeals([
      { id: 1, name: 'Summer T-Shirt', price: 19.99 },
      { id: 2, name: 'Casual Jeans', price: 24.99 },
      { id: 3, name: 'Sports Shoes', price: 29.99 },
      { id: 4, name: 'Denim Jacket', price: 49.99 },
      { id: 5, name: 'Running Shoes', price: 39.99 },
      { id: 6, name: 'Cotton Shorts', price: 15.99 },
      { id: 7, name: 'Polo Shirt', price: 25.99 },
      { id: 8, name: 'Cargo Pants', price: 34.99 },
      { id: 9, name: 'Baseball Cap', price: 12.99 },
      { id: 10, name: 'Hoodie', price: 45.99 },
    ]);

    setNewArrivals([
      { id: 11, name: 'Designer Watch', price: 34.99 },
      { id: 12, name: 'Leather Bag', price: 44.99 },
      { id: 13, name: 'Sunglasses', price: 54.99 },
      { id: 14, name: 'Smart Watch', price: 89.99 },
      { id: 15, name: 'Backpack', price: 49.99 },
      { id: 16, name: 'Headphones', price: 79.99 },
      { id: 17, name: 'Wireless Earbuds', price: 99.99 },
      { id: 18, name: 'Phone Case', price: 19.99 },
      { id: 19, name: 'Tablet Stand', price: 29.99 },
      { id: 20, name: 'Power Bank', price: 39.99 },
    ]);

    setRecommended([
      { id: 21, name: 'Winter Jacket', price: 89.99 },
      { id: 22, name: 'Running Shorts', price: 18.99 },
      { id: 23, name: 'Fitness Band', price: 22.99 },
      { id: 24, name: 'Yoga Mat', price: 29.99 },
      { id: 25, name: 'Water Bottle', price: 12.99 },
      { id: 26, name: 'Sport Bag', price: 34.99 },
      { id: 27, name: 'Resistance Bands', price: 15.99 },
      { id: 28, name: 'Dumbbells Set', price: 49.99 },
      { id: 29, name: 'Jump Rope', price: 9.99 },
      { id: 30, name: 'Gym Gloves', price: 19.99 },
    ]);
  }, []);

  return (
    <div className={styles.home}>
      {/* Banner Section */}
      <Banner />

      {/* Hot Deals Section */}
      <section className={styles.section}>
        <Link to="/collections/hot-deals" className={styles.sectionHeader}>
          <h2>Hot Deals</h2>
          <span className={styles.viewAll}>View All →</span>
        </Link>
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.scrollButton} ${styles.scrollLeft}`}
            onClick={() => scrollProducts('left', 'hotDealsGrid')}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div id="hotDealsGrid" className={styles.productGrid}>
            {hotDeals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button 
            className={`${styles.scrollButton} ${styles.scrollRight}`}
            onClick={() => scrollProducts('right', 'hotDealsGrid')}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className={styles.section}>
        <Link to="/collections/new-arrivals" className={styles.sectionHeader}>
          <h2>New Arrivals</h2>
          <span className={styles.viewAll}>View All →</span>
        </Link>
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.scrollButton} ${styles.scrollLeft}`}
            onClick={() => scrollProducts('left', 'newArrivalsGrid')}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div id="newArrivalsGrid" className={styles.productGrid}>
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button 
            className={`${styles.scrollButton} ${styles.scrollRight}`}
            onClick={() => scrollProducts('right', 'newArrivalsGrid')}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>

      {/* Recommended For You Section */}
      <section className={styles.section}>
        <Link to="/collections/recommended" className={styles.sectionHeader}>
          <h2>Recommended For You</h2>
          <span className={styles.viewAll}>View All →</span>
        </Link>
        <div className={styles.carouselContainer}>
          <button 
            className={`${styles.scrollButton} ${styles.scrollLeft}`}
            onClick={() => scrollProducts('left', 'recommendedGrid')}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div id="recommendedGrid" className={styles.productGrid}>
            {recommended.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button 
            className={`${styles.scrollButton} ${styles.scrollRight}`}
            onClick={() => scrollProducts('right', 'recommendedGrid')}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
