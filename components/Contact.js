import React from "react";
import styles from "../styles/contact.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
// Hidden for simplicity
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Contact() {
<<<<<<< HEAD
  const phoneRegEx =
    /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
//   const emailRegEx =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const schema = yup.object().shape({
    // email: yup.string().matches(emailRegEx, "Please provide a valid Email Id"),
    name: yup.string().required("Name is required"),
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className={styles.floatBtn} onClick={handleShow}>
        Contact Us
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name")}
                  id="name"
                  name="name"
                />
                {errors && (
                  <p className="error-msg" role="alert">
                    {" "}
                    {errors?.name?.message}
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
=======
    return (
        <>
        <h1 className={styles.contactHeading}>Contact Us</h1>

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
>>>>>>> b4c9bba6a980501a996c922cf336b9e04f650fc2
}

export default Contact;
