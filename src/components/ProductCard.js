import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{product.name}</h2>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className={styles.button}>
                View Details
            </Link>
        </div>
    );
};

export default ProductCard;
