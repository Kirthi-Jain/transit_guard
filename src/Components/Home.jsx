import Carousel from "react-bootstrap/Carousel";
import Corousel1 from "../Images/Car.jpg";
import Corousel2 from "../Images/BIke.jpg";
import Corousel3 from "../Images/Truck.jpg";
import { useState } from "react";

import { NavLink } from "react-router-dom";
import { Row, Col, Image, Container } from "react-bootstrap";
const Home = () => {
  const [ab] = useState([
      {
        src: Corousel1,
        h1: "Switch to India's Best Digital Insurance Brand **",
        p: "Upto 85%* off on car insurance",
        color: "white",
        textAlign: "left",
        margin: { marginRight: 800 },
        btn: {
          to: "/aboutUs",
          color: "light",
          text: "Learn more about Transit Guard",
        },
      },
      {
        src: Corousel2,
        h1: "Did you know ?",
        p: "87% motorist world-wide have been insured. Hurry up, if uninsured.",
        color: "CaptionText",
        textAlign: "left",
        margin: { marginRight: 900 },
        btn: {
          to: "/viewPlans",
          color: "dark",
          text: "Get quote",
        },
      },
      {
        src: Corousel3,
        h1: "Support 24/7/365",
        p: "Accidents can happen anytime. We're just a click & call away. Connect with us",
        color: "CaptionText",
        textAlign: "left",
        margin: { marginRight: 900 },
        btn: {
          to: "/contactUs",
          color: "dark",
          text: "Connect with us",
        },
      },
      {
        src: "assets/Fraud.png",
        h1: "Beware of fraudsters",
        p: "Insurance is subject to market risk, please read all scheme related documents carefully",
        color: "CaptionText",
        textAlign: "left",
        margin: { marginLeft: 800 },
      },
    ]),
    [cd] = useState([
      {
        src: "budget.jpeg",
        h5: "Easy on your pocket",
        p: "When you insure your car with us, you only pay for insurance. No fees, No commissions.",
      },
      {
        src: "relax.jpg",
        h5: "Stress free claims",
        p: "During claims, you chill and we hustle. We offer free pick up and drop and guarantee 3 day repair.",
      },
      {
        src: "speed.jpg",
        h5: "Instant everything",
        p: "Right from policy issuance to claim settlement, we do everything quickly. No paperwork, no hassle.",
      },
    ]);
  return (
    <>
      <Carousel fade>
        {ab?.map((a, index) => (
          <Carousel.Item interval={2000} key={index}>
            <Carousel.Caption>
              <div
                style={{
                  textAlign: a.textAlign,
                  paddingBottom: 300,
                  ...a.margin,
                  color: a.color,
                }}
              >
                <h1>{a.h1}</h1>
                <p>{a.p}</p>
                {a.btn && (
                  <NavLink
                    to={a.btn.to}
                    className={`btn btn-outline-${a.btn.color}`}
                  >
                    {a.btn.text}
                  </NavLink>
                )}
              </div>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              src={a.src}
              style={{
                height: 700,
                objectFit: "cover",
                paddingLeft: 50,
                paddingRight: 50,
                backgroundColor: "WindowText",
              }}
              alt={`Slide${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Container fluid className="padding">
        <h2>Why Transit Guard?</h2>
        <Row className="show-grid text-center">
          {cd?.map((i, j) => (
            <Col xs={12} sm={4} className="person-wrapper" key={j}>
              <Image
                src={"assets/" + i.src}
                roundedCircle
                className="benefits"
              />
              <h5>{i.h5}</h5>
              <p>{i.p}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Home;
