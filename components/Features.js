import React from 'react';
import styles from "../styles/features.module.css";
import Image from 'next/image';

export const Features = () => {
  return (
    <>
        <section className={styles.services}>
        <div className={styles.service}>
        <Image src="/claim.png" width="150" height="150" />
            
            
            <h2>Your Claim is our Top Priority</h2>
            <p>We have settled 96.06% of all claims made in FY 2022-23</p>
        </div>
        <div className={styles.service}>
        <Image src="/customer.png" width="150" height="150" />
            
            <h2>Our Customer Trust Us</h2>
            <p>We are ranked amongst the Top 10 Most Trusted Life Insurance Brands in India by ET-Brand Equity Study.</p>
        </div>
        <div className={styles.service}>
        <Image src="/foundation.png" width="150" height="150" />
            <h2>We are built on Strong Foundations</h2>
            <p>We are backed by Europe's life insurance major, Ageas and India's leading bank, Federal Bank.</p>
        </div>
    </section>
    </>
  )
}
export default Features