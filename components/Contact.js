import React from "react";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, process.env.NEXT_PUBLIC_EMAIL_ID);
    axios
      .post("/api/sendMail", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                {...register("first_name")}
                id="name"
                name="first_name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                {...register("last_name")}
                className="form-control"
                id="name"
                name="last_name"
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
                {...register("email")}
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
                {...register("phone")}
                name="phone"
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
                {...register("message")}
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
