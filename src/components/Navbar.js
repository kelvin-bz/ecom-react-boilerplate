import React from 'react';
import {Link} from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { items } = useCart();
    
    // Calculate total quantity of items in cart
    const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">E-Shop</Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li className={styles.cartLink}>
                    <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
                        {cartItemCount > 0 && (
                            <span className={styles.cartBadge}>{cartItemCount}</span>
                        )}
                    </Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            
            </ul>
        </nav>
    );
};

export default Navbar;
