import React from "react";
import styles from "../styles/contact.module.css";
import Image from "next/image";

function Contact() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.contactImage}>
                    <Image src="/contact.png" width="500" height="500" />
                </div>

                <div className={styles.contactForm}>
                    <h1 className="mt-4">Let’s talk with expereince advisors.</h1>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt
                    </p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="3"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
