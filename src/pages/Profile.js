import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBox, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Sample purchase history
  const purchaseHistory = [
    {
      id: 1,
      date: '2024-01-15',
      orderNumber: 'ORD-001',
      items: [
        { id: 1, name: 'Summer T-Shirt', price: 19.99, quantity: 2 },
        { id: 2, name: 'Casual Jeans', price: 49.99, quantity: 1 },
      ],
      total: 89.97,
      status: 'Delivered'
    },
    {
      id: 2,
      date: '2024-01-10',
      orderNumber: 'ORD-002',
      items: [
        { id: 3, name: 'Sports Shoes', price: 79.99, quantity: 1 },
      ],
      total: 79.99,
      status: 'Shipped'
    },
    {
      id: 3,
      date: '2024-01-05',
      orderNumber: 'ORD-003',
      items: [
        { id: 4, name: 'Winter Jacket', price: 129.99, quantity: 1 },
        { id: 5, name: 'Wool Scarf', price: 24.99, quantity: 2 },
      ],
      total: 179.97,
      status: 'Delivered'
    }
  ];

  // If user isn't logged in, prompt them to log in
  if (!user) {
    return (
      <div className={styles.notLoggedIn}>
        <h1>Profile Page</h1>
        <p>Please <a href="/login">log in</a> to view your profile.</p>
      </div>
    );
  }

  // Log out handler
  const handleLogout = () => {
    logout(); // Clears the user from AuthContext
    navigate('/'); // Redirect to home or wherever you like
  };

  return (
    <div className={styles.profileContainer}>
      {/* User Info Section */}
      <section className={styles.userInfo}>
        <div className={styles.userHeader}>
          <div className={styles.avatarCircle}>
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
          <h1>My Profile</h1>
        </div>
        
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <FontAwesomeIcon icon={faUser} />
            <div>
              <h3>Name</h3>
              <p>{user.name}</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <h3>Email</h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>

        <button onClick={handleLogout} className={styles.logoutButton}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </button>
      </section>

      {/* Purchase History Section */}
      <section className={styles.purchaseHistory}>
        <div className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faBox} />
          <h2>Purchase History</h2>
        </div>

        <div className={styles.orders}>
          {purchaseHistory.map(order => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.orderHeader}>
                <div>
                  <h3>Order #{order.orderNumber}</h3>
                  <p className={styles.orderDate}>
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <span className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                  {order.status}
                </span>
              </div>

              <div className={styles.orderItems}>
                {order.items.map(item => (
                  <div key={item.id} className={styles.orderItem}>
                    <div className={styles.itemInfo}>
                      <div className={styles.greyBox}></div>
                      <div>
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemQuantity}>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className={styles.itemPrice}>${item.price}</p>
                  </div>
                ))}
              </div>

              <div className={styles.orderFooter}>
                <p className={styles.orderTotal}>
                  Total: <span>${order.total.toFixed(2)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
