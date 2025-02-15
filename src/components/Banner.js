import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* Main Large Banner */}
      <div className={styles.mainBanner}>
        <div className={styles.mainText}>
          <h2>New User Discount</h2>
          <p>Save up to $50 on your first purchase!</p>
        </div>
      </div>

      {/* Smaller Banners Inside */}
      <div className={styles.sideBanners}>
        <div className={styles.sideBanner}>
          <h3>Fast & Reliable Delivery</h3>
          <p>Get your orders on time!</p>
        </div>
        <div className={styles.sideBanner}>
          <h3>Exclusive Deals</h3>
          <p>Special discounts just for you!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
