

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";
import styles from "../styles/card.module.css";
function GridCard() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>

    <Container>
    <div className={`${styles.section_head} col-sm-12`}>
        <h4><span>Why Choose</span> Me?  </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas beatae eligendi enim voluptates nam unde nobis sint voluptas expedita libero ratione recusandae dolorem, autem adipisci quia. Autem, nobis maiores!</p>
      </div>

    <Row xs={1} md={3} className="g-4">
      
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card className={styles.item}>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary"> <a href="#" className="btn btn-primary" onClick={handleShow}>
                       Go somewhere
                      </a></Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>

  

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    


    


    </>
  );
}

export default GridCard;
