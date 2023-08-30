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
}

export default Contact;
