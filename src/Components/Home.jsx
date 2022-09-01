import Carousel from "react-bootstrap/Carousel";
import Corousel1 from "../Images/Car.jpg";
import Corousel2 from "../Images/BIke.jpg";
import Corousel3 from "../Images/Truck.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  },
  items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
  Home = () => {
    const [ab] = useState([
        {
          src: Corousel1,
          h1: "Switch to India's Best Digital Insurance Brand **",
          p: "Upto 85%* off on car insurance",
          color: "white",
          textAlign: "left",
          margin: { marginRight: 800 },
          btn: {
            to: "/transit_guard/aboutUs",
            color: "light",
            text: "Learn more about Transit Guard -->",
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
            to: "/transit_guard/viewPlans",
            color: "dark",
            text: "Get quote -->",
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
            to: "/transit_guard/contactUs",
            color: "dark",
            text: "Connect with us -->",
          },
        },
        {
          src: "/transit_guard/assets/Fraud.png",
          h1: "Beware of fraudsters",
          p: "Insurance is subject to market risk, please read all scheme related documents carefully",
          color: "white",
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
          src: "speed.jpg",
          h5: "Instant everything",
          p: "Right from policy issuance to claim settlement, we do everything quickly. No paperwork, no hassle.",
        },
        {
          src: "relax.jpg",
          h5: "Stress free claims",
          p: "During claims, you chill and we hustle. We offer free pick up and drop and guarantee 3 day repair.",
        },
      ]);
    return (
      <motion.div variants={container} initial="hidden" animate="visible">
        <Carousel fade>
          {ab?.map((a, index) => (
            <Carousel.Item interval={2000} key={index}>
              <Carousel.Caption>
                <motion.div
                  variants={items}
                  style={{
                    textAlign: a.textAlign,
                    paddingBottom: 300,
                    ...a.margin,
                    color: a.color,
                  }}
                  transition={{
                    repeat: Infinity,
                    type: "just",
                    duration: 3,
                    repeatType: "reverse",
                  }}
                  animate={{ y: [-80, 80], opacity: [0.5, 1] }}
                >
                  <h1>{a.h1}</h1>
                  <p>{a.p}</p>
                  {a.btn && (
                    <motion.div whileHover={{ scale: 1.2, x: 100 }}>
                      <NavLink
                        to={a.btn.to}
                        className={`btn btn-outline-${a.btn.color}`}
                      >
                        {a.btn.text}
                      </NavLink>
                    </motion.div>
                  )}
                </motion.div>
              </Carousel.Caption>
              <motion.img
                variants={items}
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
                <motion.img
                  src={"/transit_guard/assets/" + i.src}
                  className="benefits mb-3"
                  alt={i.h5}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                    rotateY: j !== 1 ? [0, 360] : 0,
                    scale: 1,
                    y: j === 1 ? [40, -90] : 0,
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",
                    duration: 3,
                    bounce: 0.5,
                    repeat: Infinity,
                    repeatType: j === 1 ? "loop" : "reverse",
                  }}
                  variants={items}
                />
                <h5>{i.h5}</h5>
                <p>{i.p}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>
    );
  };
export default Home;
