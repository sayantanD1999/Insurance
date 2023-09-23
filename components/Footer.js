import React from 'react'
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Contact Us</a>
    </div>
  )
}

export default Footer