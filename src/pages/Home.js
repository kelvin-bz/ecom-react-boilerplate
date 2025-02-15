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
    // Sample static data with images - 10 products per section
    setHotDeals([
      { id: 1, name: 'Summer T-Shirt', price: 19.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300' },
      { id: 2, name: 'Casual Jeans', price: 24.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300' },
      { id: 3, name: 'Sports Shoes', price: 29.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300' },
      { id: 4, name: 'Denim Jacket', price: 49.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=300' },
      { id: 5, name: 'Running Shoes', price: 39.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300' },
      { id: 6, name: 'Cotton Shorts', price: 15.99, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300' },
      { id: 7, name: 'Polo Shirt', price: 25.99, image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=300' },
      { id: 8, name: 'Cargo Pants', price: 34.99, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300' },
      { id: 9, name: 'Baseball Cap', price: 12.99, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300' },
      { id: 10, name: 'Hoodie', price: 45.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300' },
    ]);

    setNewArrivals([
      { id: 11, name: 'Designer Watch', price: 34.99, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300' },
      { id: 12, name: 'Leather Bag', price: 44.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300' },
      { id: 13, name: 'Sunglasses', price: 54.99, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300' },
      { id: 14, name: 'Smart Watch', price: 89.99, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300' },
      { id: 15, name: 'Backpack', price: 49.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300' },
      { id: 16, name: 'Headphones', price: 79.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300' },
      { id: 17, name: 'Wireless Earbuds', price: 99.99, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300' },
      { id: 18, name: 'Phone Case', price: 19.99, image: 'https://images.unsplash.com/photo-1601593346740-925c3dc2d69e?w=300' },
      { id: 19, name: 'Tablet Stand', price: 29.99, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300' },
      { id: 20, name: 'Power Bank', price: 39.99, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300' },
    ]);

    setRecommended([
      { id: 21, name: 'Winter Jacket', price: 89.99, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=300' },
      { id: 22, name: 'Running Shorts', price: 18.99, image: 'https://images.unsplash.com/photo-1515586838455-8f8c7e9a5c09?w=300' },
      { id: 23, name: 'Fitness Band', price: 22.99, image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=300' },
      { id: 24, name: 'Yoga Mat', price: 29.99, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf1b1f?w=300' },
      { id: 25, name: 'Water Bottle', price: 12.99, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300' },
      { id: 26, name: 'Sport Bag', price: 34.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300' },
      { id: 27, name: 'Resistance Bands', price: 15.99, image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=300' },
      { id: 28, name: 'Dumbbells Set', price: 49.99, image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300' },
      { id: 29, name: 'Jump Rope', price: 9.99, image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?w=300' },
      { id: 30, name: 'Gym Gloves', price: 19.99, image: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=300' },
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
