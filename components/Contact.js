import React from "react";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
// Hidden for simplicity
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Contact() {
  const phoneRegEx =
    /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const schema = yup.object().shape({
    email: yup.string().matches(emailRegEx, "Please provide a valid Email Id"),
    first_name: yup.string().required("Name is required"),
    phone: yup
      .string()
      .matches(phoneRegEx, "Please provide a valid phone number"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  console.log(errors);
  const onSubmit = (data) => {
    axios
      .post("/api/sendMail", {
        data,
      })
      .then(function (response) {
        alert(
          "Form successfully submitted, I will contact you as soon as possible"
        );
        reset();
      })
      .catch(function (error) {
        alert(`${error.message}`);
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
                Name
              </label>
              <input
                type="text"
                className="form-control"
                {...register("first_name")}
                id="name"
                name="first_name"
              />
              {errors && (
                <p className="error-msg" role="alert">
                  {" "}
                  {errors?.first_name?.message}
                </p>
              )}
            </div>
            {/* <div className="mb-3">
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
            </div> */}
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

              {errors && (
                <p className="error-msg" role="alert">
                  {errors?.email?.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                {...register("phone")}
                name="phone"
              />
              {errors && (
                <p className="error-msg" role="alert">
                  {errors?.phone?.message}
                </p>
              )}
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
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
