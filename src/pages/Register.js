import React from 'react';
import styles from './Auth.module.css';

const Register = () => {
  return (
    <div className={styles.auth}>
      <h1>Register</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;