import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Figure from "react-bootstrap/Figure";
import phone from "../Images/phone.png";

export default function TalkToExpert() {
  const [show, setShow] = useState(false),
    handleClose = () => setShow(false);
  return (
    <>
      <Figure>
        <Figure.Image
          className="mt-3 btn-outline-light"
          onClick={() => setShow(true)}
          width={50}
          height={10}
          alt="expert"
          src={phone}
        />
        <Figure.Caption style={{color: "white"}}>Talk to expert?.</Figure.Caption>
      </Figure>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Talk to our expert Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Please enter your contact details. Our Team will get back to you
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="10 digit mobile number"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Please share your queries</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
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
