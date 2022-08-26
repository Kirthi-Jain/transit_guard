import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Card, Col, Image, Button } from "react-bootstrap";
import hero from "../Images/Bikes/Hero-HF-Deluxe-i3S-5.jpg";
import Background from "../Images/BackGround.jpg";
import avenger from "../Images/Bikes/MatteWhite.jpg";
import Apache from "../Images/Bikes/R (1).jpg";
import pulsor from "../Images/Bikes/R.jpg";
import honda from "../Images/Cars/Honda.jpeg";
import tata from "../Images/Cars/Tata.jpg";
import nissan from "../Images/Cars/nissan.jpg";
import maruti from "../Images/Cars/Maruti.jpg";
import axa from "../Images/logo/axa.jpg";
import carwale from "../Images/logo/carwale.png";
import newin from "../Images/logo/newin.jpg";
import pb from "../Images/logo/pb.png";
import { useState } from "react";
import comprehensive from "../Images/policy/Corousel2.jpg";
import three from "../Images/policy/3.jpg";
import gieco from "../Images/logo/allstate.jpg";
import allstate from "../Images/logo/gieco.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ViewPlans = () => {
  const [bikes] = useState([
      { src: pulsor, t: "Pulsor 150", rs: "1,102" },
      { src: avenger, t: "Avenger 220", rs: "1,502" },
      { src: hero, t: "Hero Deluxe", rs: "902" },
      { src: Apache, t: "TVS Apache", rs: "2,102" },
    ]),
    [cars] = useState([
      { src: honda, t: "Honda City", rs: "5,102" },
      { src: tata, t: "Tata Nexon", rs: "8,502" },
      { src: nissan, t: "Nissan SF", rs: "12,602" },
      { src: maruti, t: "Maruti Swift", rs: "4,402" },
    ]),
    policyType = [
      {
        t1: "Comprehensive Insurance",
        t2: "It is not mandatory, but Recommended",
        src: comprehensive,
      },
      {
        t1: "Third party insurance",
        t2: " It is mandatory as per Indain Motor Tariff for all automotives",
        src: three,
      },
    ],
    [logo] = useState([
      { src: axa, text: "Bharti Axa" },
      { src: carwale, text: "Carwale" },
      { src: newin, text: "New India Assurance" },
      { src: pb, text: "Policy Bazaar" },
      { src: gieco, text: "Gieco" },
      { src: allstate, text: "All State" },
    ]);
  return (
    <>
    <img src={Background} className="viewPlans" alt="background"/>
      <Image
        src={Background}
        className="header-image d-block w-100 mb-5 mt-2"
      />
      <Container>
        <Row>
          <h3 className="mt-5 mb-4">Bike Insurance for Popular Bike Models</h3>
          <Carousel
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {bikes?.map((i, j) => (
              <Card key={j} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={i.src}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{i.t}</Card.Title>
                  <Card.Text>{`* Premium starrting at Rs. ${i.rs}`}</Card.Text>
                  <Button variant="secondary">View Instant Quotes</Button>
                </Card.Body>
              </Card>
            ))}
          </Carousel>
        </Row>
        <Row>
          <h3 className="mt-5 mb-4">Car Insurance for Popular Car Models</h3>
          <hr />
          <Carousel
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {cars?.map((i, j) => (
              <Card key={j} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={i.src}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{i.t}</Card.Title>
                  <Card.Text>{`* Premium starrting at Rs. ${i.rs}`}</Card.Text>
                  <Button variant="secondary">View Instant Quotes</Button>
                </Card.Body>
              </Card>
            ))}
          </Carousel>
        </Row>
        <Row>
          <h3 className="mt-5 mb-4">Confused for policy type ?</h3>
          <hr />
          {policyType?.map((i, j) => (
            <Col xs={12} sm={4} key={j}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={i.src}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{i.t1}</Card.Title>
                  <Card.Text>{i.t2}</Card.Text>
                  <Button variant="secondary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <h3 className="mt-5 mb-4">Our Partners</h3>
          <hr />
          {logo?.map((i, j) => (
            <Col key={j}>
              <Card style={{ width: "10rem" }}>
                <Card.Img
                  variant="top"
                  src={i.src}
                  style={{ height: "100px" }}
                />
                <Card.Body style={{ height: "80px" }}>
                  <Card.Title>{i.text}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br />
      </Container>
    </>
  );
};

export default ViewPlans;
