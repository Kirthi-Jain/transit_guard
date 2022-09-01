import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Container,
  Row,
  Card,
  Col,
  Carousel as Carousel10,
} from "react-bootstrap";
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
import allstate from "../Images/logo/allstate.jpg";
import gieco from "../Images/logo/gieco.png";
import Background1 from "../Images/BackGround1.jpg";
import { motion } from "framer-motion";
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
  },
  container = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  },
  items = {
    hidden: { y: 20, opacity: 0, rotate: -30 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
    },
  },
  ViewPlans = () => {
    const [bikes, setBikes] = useState([
        {
          src: pulsor,
          t: "Pulsor 150",
          rs: "1,102",
          showQuotes: false,
          quotes:
            "Kotak Insurance. \n Cover upto 30 Lac. \n Max Limit 65 years. \n Claim Settles 98.8% \n T&C applied",
        },
        {
          src: avenger,
          t: "Avenger 220",
          rs: "1,502",
          showQuotes: false,
          quotes:
            "SunLife Insurance. \n Cover upto 20 Lac. \n Max Limit 65 years. \n Claim Settles 90% \n T&C applied",
        },
        {
          src: hero,
          t: "Hero Deluxe",
          rs: "902",
          showQuotes: false,
          quotes:
            "Meddy Assist. \n Cover upto 16 Lac. \n Max Limit 60 years. \n Claim Settles 98% \n T&C applied",
        },
        {
          src: Apache,
          t: "TVS Apache",
          rs: "2,102",
          showQuotes: false,
          quotes:
            "Bajaj Axa MotoCorp. \n Cover upto 39 Lac. \n Max Limit 57 years. \n Claim Settles 88.8% \n T&C applied",
        },
      ]),
      [cars, setCars] = useState([
        {
          src: honda,
          t: "Honda City",
          rs: "5,102",
          showQuotes: false,
          quotes:
            "Meddy Assist. \n Cover upto 60 Lac. \n Max Limit 60 years. \n Claim Settles 98% \n T&C applied",
        },
        {
          src: tata,
          t: "Tata Nexon",
          rs: "8,502",
          showQuotes: false,
          quotes:
            "Bajaj Axa MotoCorp. \n Cover upto 29 Lac. \n Max Limit 57 years. \n Claim Settles 88.8% \n T&C applied",
        },
        {
          src: nissan,
          t: "Nissan SF",
          rs: "12,602",
          showQuotes: false,
          quotes:
            "SunLife Insurance. \n Cover upto 45 Lac. \n Max Limit 65 years. \n Claim Settles 90% \n T&C applied",
        },
        {
          src: maruti,
          t: "Maruti Swift",
          rs: "4,402",
          showQuotes: false,
          quotes:
            "Kotak Insurance. \n Cover upto 33 Lac. \n Max Limit 65 years. \n Claim Settles 98.8% \n T&C applied",
        },
      ]),
      [policyType, setPolicyType] = useState([
        {
          t1: "Comprehensive Insurance",
          t2: "It is not mandatory, but Recommended",
          src: comprehensive,
          showQuotes: false,
          quotes:
            "Comprehensive Car Insurance offers extensive coverage that covers Third-party Liabilities and Own Damage. \n Buying this type of policy is not mandatory by law, however, it is the preferred choice for many car owners. \n Comprehensive Car Insurance is a policy that covers third-party liabilities and damages to your vehicle arising from accidents, natural calamities, manmade calamities and fire.\n For example, if your vehicle gets damaged due to flooding, this policy shall cover the repair cost as per the applicable terms.",
        },
        {
          t1: "Third party insurance",
          t2: " It is mandatory as per Indain Motor Tariff for all automotives",
          src: three,
          showQuotes: false,
          quotes:
            "As per The Motor Vehicles Act, third-party car insurance is mandatory while driving a vehicle in India. \n It reimburses the third-parties for losses/damages caused by the insured four-wheeler. \n Third-party Car Insurance is the most basic and compulsory insurance plan for your car. It provides financial and legal assistance if you injure a third party or damage their vehicle/property. \nFor example, if your car was involved in an accident that damaged a third party’s car, this plan shall cover their repair cost.",
        },
      ]),
      [logo] = useState([
        { src: axa, text: "Bharti Axa" },
        { src: carwale, text: "Carwale" },
        { src: newin, text: "New India Assurance" },
        { src: pb, text: "Policy Bazaar" },
        { src: gieco, text: "Gieco" },
        { src: allstate, text: "All State" },
      ]);
    return (
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.img
          src={Background1}
          className="viewPlans1"
          alt="background"
          animate={{ scale: 1 }}
          initial={{ scale: 0.8 }}
          transition={{ type: "tween", duration: 1.5 }}
        />
        <Carousel10>
          <Carousel10.Item>
            <Carousel10.Caption>
              <motion.div
                style={{
                  textAlign: "left",
                  paddingBottom: 500,
                  marginLeft: 900,
                  fontFamily: "serif",
                }}
                transition={{
                  type: "tween",
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 3,
                }}
                initial={{ y: 100 }}
                animate={{
                  y: 300,
                  color: ["cadetblue"],
                }}
              >
                <h1>
                  Fun is like Insurance; the older it gets, the more it costs
                </h1>
                <p>~ W.Shakespeare</p>
              </motion.div>
            </Carousel10.Caption>
            <motion.img
              src={Background}
              className="header-image d-block w-80 mb-5 mt-2"
              alt="ThinkPlan"
              variants={items}
              animate={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.5, opacity: 0.7 }}
              transition={{ duration: 2, type: "tween" }}
            />
          </Carousel10.Item>
        </Carousel10>
        <Container>
          <h3 className="mt-5 mb-4">Bike Insurance for Popular Bike Models</h3>
          <hr />
          <motion.div className="row" variants={items}>
            <Carousel
              // showDots={true}
              responsive={responsive}
              // ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4500}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {bikes?.map((i, j) => (
                <Card style={{ width: "18rem" }} key={j}>
                  <Card.Img
                    variant="top"
                    src={i.src}
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>{i.t}</Card.Title>
                    <Card.Text>{`* Premium starting at Rs. ${i.rs}`}</Card.Text>
                    <motion.button
                      className="btn btn-secondary"
                      whileHover={{
                        backgroundColor: "ThreeDShadow",
                        scale: 1.2,
                      }}
                      onClick={() =>
                        setBikes((prev) => {
                          prev = [...prev];
                          return prev.map((l, k) => {
                            if (k === j) {
                              return { ...l, showQuotes: !l.showQuotes };
                            } else return l;
                          });
                        })
                      }
                    >
                      {`${i.showQuotes ? `Hide` : `View`} Instant Quotes`}
                    </motion.button>
                    {i.showQuotes && (
                      <ul className="mt-2">
                        {i.quotes.split("\n").map((m, n) => {
                          return <li key={n}>{m}</li>;
                        })}
                      </ul>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </Carousel>
          </motion.div>
          <h3 className="mt-5 mb-4">Car Insurance for Popular Car Models</h3>
          <hr />
          <motion.div className="row" variants={items}>
            <Carousel
              // showDots={true}
              responsive={responsive}
              // ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4500}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {cars?.map(function (i, j) {
                return (
                  <Card style={{ width: "18rem" }} key={j}>
                    <Card.Img
                      variant="top"
                      src={i.src}
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title>{i.t}</Card.Title>
                      <Card.Text>{`* Premium starting at Rs. ${i.rs}`}</Card.Text>
                      <motion.button
                        className="btn btn-secondary"
                        whileHover={{
                          backgroundColor: "black",
                          scale: 1.2,
                        }}
                        onClick={() =>
                          setCars(function (prev) {
                            prev = [...prev];
                            return prev.map((l, k) => {
                              if (k === j) {
                                return { ...l, showQuotes: !l.showQuotes };
                              } else return l;
                            });
                          })
                        }
                      >
                        {`${i.showQuotes ? `Hide` : `View`} Instant Quotes`}
                      </motion.button>
                      {i.showQuotes && (
                        <ul className="mt-2">
                          {i.quotes.split("\n").map((m, n) => {
                            return <li key={n}>{m}</li>;
                          })}
                        </ul>
                      )}
                    </Card.Body>
                  </Card>
                );
              })}
            </Carousel>
          </motion.div>
          <Row>
            <h3 className="mt-5 mb-4">Confused for policy type ?</h3>
            <hr />
            {policyType?.map((i, j) => (
              <Col xs={12} sm={4} key={j}>
                <motion.div variants={items}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={i.src}
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title>{i.t1}</Card.Title>
                      <Card.Text>{i.t2}</Card.Text>
                      <motion.button
                        className="btn btn-primary"
                        whileHover={{
                          backgroundColor: "blueviolet",
                          scale: 1.2,
                        }}
                        onClick={() =>
                          setPolicyType(function (prev) {
                            prev = [...prev];
                            return prev.map((l, k) => {
                              if (k === j) {
                                return { ...l, showQuotes: !l.showQuotes };
                              } else return l;
                            });
                          })
                        }
                      >
                        {`Read ${i.showQuotes ? `Less` : `More`}`}
                      </motion.button>
                      {i.showQuotes && (
                        <ul className="mt-2">
                          {i.quotes.split("\n").map((m, n) => {
                            return <li key={n}>{m}</li>;
                          })}
                        </ul>
                      )}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <Row>
            <h3 className="mt-5 mb-4">Our Partners</h3>
            <hr />
            {logo?.map((i, j) => (
              <Col key={j}>
                <motion.div
                  variants={items}
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  <Card style={{ width: "10rem", borderRadius: "8%" }}>
                    <Card.Img
                      variant="top"
                      src={i.src}
                      style={{ height: "100px" }}
                    />
                    <Card.Body style={{ height: "80px" }}>
                      <Card.Title>{i.text}</Card.Title>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <br />
        </Container>
      </motion.div>
    );
  };

export default ViewPlans;
