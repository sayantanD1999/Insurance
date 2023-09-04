import React from 'react';
import styles from "../styles/features.module.css";

export const Features = () => {
  return (
    <>
        <section className={styles.services}>
        <div className={styles.service}>
            <i className="fas fa-wrench"></i>
            <h2>Service 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.service}>
            <i className="fas fa-paint-brush"></i>
            <h2>Service 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.service}>
            <i className="fas fa-tools"></i>
            <h2>Service 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </section>
    </>
  )
}
export default Features