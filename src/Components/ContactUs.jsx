import Accordion from "react-bootstrap/Accordion";
import { Image, Container, Col, Row } from "react-bootstrap";
import HearU from "./HearFromU";
import { useState } from "react";

function ContactUs() {
  const [item] = useState([
    {
      h: "New Delhi",
      a1: "SDF No. K-13 to 16, NSEZ, Phase-II, NOIDA – 201305 (U.P.) India",
      a2: "Phone: +91.120.4018100 FAX: +91.120.4018140",
    },
    {
      h: "Chennai",
      a1: "Pritech Tech Park, Anna Square, Chennai India",
      a2: "Phone: +91.120.4018100 FAX: +91.120.4018140",
    },
    {
      h: "Mumbai",
      a1: "Vyedhi Campus, Sardar Road, Boriveli -78 India",
      a2: "Phone: +91.120.4018100 FAX: +91.120.4018140",
    },
    {
      h: "Kolkata",
      a1: "Eden Park, Kasturba Road, Howrah, Kolkata",
      a2: "Phone: +91.120.4018100 FAX: +91.120.4018140",
    },
  ]);
  return (
    <>
     <img className="viewPlans" src="assets/ContactUs.jpg" alt ="BackGround"/>
      <Container fluid>
        <Row>
          <Col>
            <Image
              src="assets/ContactUs.jpg"
              style={{
                height: 500,
                width: "90%",
                paddingTop: "10px",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col>
            <HearU />
          </Col>
        </Row>
      </Container>
      <hr />
      <h3 style={{ marginLeft: 20, color: "wheat" }}>Our Locations</h3>
      <Container fluid>
        <Row>
          <Col>
            <Accordion
              style={{
                margin: "1em 1em 1em",
                width: "82%",
                paddingRight: "2em",
                color: "wheat"
              }}
            >
              <h4>India</h4>
              {item?.map((i, j) => (
                <Accordion.Item eventKey={String(j)} key={j}>
                  <Accordion.Header>{i.h}</Accordion.Header>
                  <Accordion.Body>
                    <>
                     {i.a1}
                    </>
                    <br />
                    <>{i.a2}</>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <Accordion
              style={{
                margin: "1em 1em 1em",
                width: "82%",
                paddingRight: "2em",
                color: "wheat"
              }}
            >
              <h4>United Kingdom (Headquarters)</h4>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Berlin</Accordion.Header>
                <Accordion.Body>
                  <h5>Transit Guard Inc.</h5>
                  <>
                    666 Burrard Street, Suite 500, Vancouver, BC, V6C 3P6,
                    Berlin
                  </>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.623638373392!2d77.58072000488798!3d12.990841167193551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e1b3e4bfe9%3A0x473695c992547677!2sV%20Guard!5e0!3m2!1sen!2sin!4v1661365636373!5m2!1sen!2sin"
              width="800"
              height="450"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0, paddingBottom: 25 }}
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUs;
