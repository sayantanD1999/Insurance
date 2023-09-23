import React from 'react'
import styles from "../styles/about.module.css";
import Image from "next/image";

function About() {
    return (
        <>
        <div className={styles.heroOuter}>
            <div className={styles.hero}>
                <div className={styles.heroImage}>
                    <Image src="/about-img.png" width="500" height="500" className='heroImageInner'/>
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Welcome to Our Website</h1>
                    <p className={styles.heroText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ex vitae felis tristique faucibus.</p>
                    <p className={styles.heroText}>Praesent quis felis libero. Integer vel bibendum dolor.</p>
                    <button className={styles.heroButton}>Learn More</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default About