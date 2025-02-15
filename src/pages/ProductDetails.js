import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Reuse your existing ProductCard
import { useCart } from '../context/CartContext';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    // Example only: replace with a real API call or logic
    setProduct({
      id: parseInt(id),
      name: 'Sample Product',
      image: 'https://via.placeholder.com/300', 
      description: 'This is a description of the sample product.',
      price: 49.99,
    });

    setRelatedProducts([
      { id: 2, name: 'Related Product 1', price: 19.99, image: 'https://via.placeholder.com/200' },
      { id: 3, name: 'Related Product 2', price: 24.99, image: 'https://via.placeholder.com/200' },
      { id: 4, name: 'Related Product 3', price: 34.99, image: 'https://via.placeholder.com/200' },
    ]);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      alert(`Added "${product.name}" to your cart!`);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.details}>
      {/* Product Info Section */}
      <div className={styles.productContainer}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <span className={styles.productPrice}>${product.price}</span>
          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* "You May Also Like" Section */}
      <div className={styles.youMayAlsoLike}>
        <h2>You May Also Like</h2>
        <div className={styles.relatedProducts}>
          {relatedProducts.map((relatedItem) => (
            <ProductCard key={relatedItem.id} product={relatedItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
