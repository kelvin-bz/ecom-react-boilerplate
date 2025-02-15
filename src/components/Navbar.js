import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { items } = useCart();
    const { user, logout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    
    // Calculate total quantity of items in cart
    const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        setShowDropdown(false);
        navigate('/');
    };

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
                
                {user ? (
                    <li className={styles.userMenu} ref={dropdownRef}>
                        <button 
                            className={styles.userButton}
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                            {user.name}
                            <FontAwesomeIcon 
                                icon={faChevronDown} 
                                style={{ marginLeft: '5px' }}
                                className={showDropdown ? styles.chevronUp : ''}
                            />
                        </button>
                        {showDropdown && (
                            <div className={styles.dropdown}>
                                <Link 
                                    to="/profile"
                                    onClick={() => setShowDropdown(false)}
                                >
                                    Profile
                                </Link>
                                <button onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </li>
                ) : (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
