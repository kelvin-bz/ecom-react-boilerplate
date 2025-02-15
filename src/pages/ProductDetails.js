import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import styles from './ProductDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate on click
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addItem } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Example only: Replace with API call
    setProduct({
      id: parseInt(id),
      name: `Sample Product ${id}`,
      description: 'This is a description of the sample product.',
      price: 49.99,
    });

    setRelatedProducts([
      { id: 2, name: 'Related Product 1', price: 19.99 },
      { id: 3, name: 'Related Product 2', price: 24.99 },
      { id: 4, name: 'Related Product 3', price: 34.99 },
    ]);
  }, [id]);

  const handleQuantityChange = (change) => {
    setQuantity(prev => {
      const newQuantity = prev + change;
      return newQuantity >= 1 ? newQuantity : 1;
    });
  };

  const handleAddToCart = () => {
    if (product) {
      addItem({ ...product, quantity });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      setQuantity(1); // Reset quantity after adding to cart
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.details}>
      {/* Product Info Section */}
      <div className={styles.productContainer}>
        <div className={styles.greyBox}></div> {/* Grey Box Instead of Image */}
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <span className={styles.productPrice}>${product.price}</span>
          
          {/* Quantity Selector */}
          <div className={styles.quantitySelector}>
            <button 
              onClick={() => handleQuantityChange(-1)}
              className={styles.quantityButton}
              disabled={quantity <= 1}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)}
              className={styles.quantityButton}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>
        </div>
      </div>

      {/* "You May Also Like" Section */}
      <div className={styles.youMayAlsoLike}>
        <h2>You May Also Like</h2>
        <div className={styles.relatedProducts}>
          {relatedProducts.map((relatedItem) => (
            <div
              key={relatedItem.id}
              className={styles.relatedProductCard}
              onClick={() => handleProductClick(relatedItem.id)}
            >
              <ProductCard product={relatedItem} />
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.checkmark}>✔</span>
            <p className={styles.popupMessage}>
              <strong>{product.name}</strong> has been added to your cart!
            </p>
            <div className={styles.popupButtons}>
              <button onClick={() => setShowPopup(false)} className={styles.closeButton}>
                Continue Shopping
              </button>
              <Link to="/cart" className={styles.viewCartButton}>
                View Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
