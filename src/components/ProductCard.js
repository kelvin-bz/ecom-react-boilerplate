import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className={styles.cardLink}>
            <div className={styles.card}>
                <div className={styles.greyBox}></div> {/* Grey Box Placeholder */}
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.price}>${product.price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
