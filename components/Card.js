import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import styles from "../styles/card.module.css";


function GridCard() {
  const [show, setShow] = useState(false);
  const [fileNo, setFileNo] = useState(1)
  const [modalContent, setModalContent] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = (n, x) => {
    setFileNo(n)
    setModalContent(x)
    setShow(true);}


  const details = [
    {
      title: "header 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
    },
    {
      title: "header 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
    },
    {
      title: "header 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
    },
    {
      title: "header 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
    },
    {
      title: "header 5",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas",
    }

  ]

  return (
    <>
      <Container>
        <div className={`${styles.section_head} col-sm-12`}>
          <h4>
            <span>Why Choose</span> Me?{" "}
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas
            beatae eligendi enim voluptates nam unde nobis sint voluptas
            expedita libero ratione recusandae dolorem, autem adipisci quia.
            Autem, nobis maiores!
          </p>
        </div>

        <Row xs={1} md={3} className="g-4">
          {details.map((item, idx) => (
            <Col key={idx}>

              <Card className={styles.item}>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.desc}
                  </Card.Text>
                  <Button onClick={()=>handleShow(idx+1, item)} variant="primary">
                      Check Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.summary}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <a href={`/files/bro_${fileNo}.pdf`} download>
          <Button variant="primary">
            Get Brochure {fileNo}
          </Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GridCard;
