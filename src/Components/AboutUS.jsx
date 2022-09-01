import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

export default class AboutUS extends Component {
  render() {
    return (
      <>
        <img
          className="viewPlans"
          src="/transit_guard/assets/R1.jpeg"
          alt="BackGround"
        />
        <motion.img
          src="/transit_guard/assets/R.jpeg"
          className="header-image d-block w-99 mb-5 mt-3"
          alt="Main_Image"
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.5, opacity: 0.7 }}
          transition={{ duration: 3, type: "spring", bounce: 0.5 }}
        />
        <Container fluid>
          <Row>
            <Col>
              <motion.img
                src="/transit_guard/assets/agent.jpg"
                className="about-profile-pic"
                alt="Agent"
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 2,
                }}
                initial={{ scale: 0.5, opacity: 0.7 }}
              />
            </Col>
            <Col className="summary">
              <h3>Transit Guard</h3>
              <p>
                Transit Guard was incorporated on March 2, 1989 in Miami
                Gardens, FL to provide a high quality and low cost insurance
                product to the non-standard automobile insurance market. The
                company is family owned and it is one of the largest privately
                held property and casualty insurance companies in the United
                States.These trees are so much fun. I get started on them and I
                have a hard time stopping. How to paint. That's easy. What to
                paint. That's much harder. Be brave. The man who does the best
                job is the one who is happy at his job.
              </p>
              <p>
                Anyone can paint. You can do anything here. So don't worry about
                it. Life is too short to be alone, too precious. Share it with a
                friend. Every highlight needs it's own personal shadow. That's
                what makes life fun. That you can make these decisions. That you
                can create the world that you want. Of course he's a happy
                little stone, cause we don't have any other kind. It's so
                important to do something every day that will make you happy.
              </p>
              <p>
                You better get your coat out, this is going to be a cold
                painting. That's the way I look when I get home late; black and
                blue. That's crazy.
              </p>
              <span>
                Based on user inputs, various options in the desired insurance
                product are showcased to him/her. To facilitate the user
                understanding of the products, there are special segments like
                “knowledge.policybazaar” and “ask.policybazaar”. Under these
                segments, customer queries are answered and information about
                new insurance products and trends are shared with the users.
                Policybazaar.com has built strong relationships with all
                prominent public and private insurance companies across India.
                Our partners are from life insurance, health insurance, car
                insurance, travel insurance, corporate insurance and loan
                sectors. We pride our self in the relationship we share with our
                partners. We utilize these partnerships to:
              </span>
              <hr />
              <ul>
                <li>Streamline our knowledge and business operations </li>
                <li>Show prices directly from the insurers. </li>
                <li>Compare the policies with complete details</li>
                <li>Provide the facility of buying insurance online</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
