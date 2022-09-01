import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logo.jpg";
import { NavLink, Link } from "react-router-dom";
import TalkToExpert from "./TalkToExpert";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Navbar.Brand href="/transit_guard" className="me-4">
            <img
              alt="logo"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block"
            />{" "}
            TRANSIT GUARD
          </Navbar.Brand>
        </motion.div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Link to="/transit_guard" className="btn btn-outline-light me-2">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <NavLink
                to="/transit_guard/aboutUs"
                className="btn btn-outline-light me-2"
              >
                About us
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <NavLink
                to="/transit_guard/contactUs"
                className="btn btn-outline-light me-2"
              >
                Contact us
              </NavLink>
            </motion.div>
          </Nav>
          <Nav className="auto">
            <motion.div whileHover={{ scale: 1.2 }}>
              <NavLink
                to="/transit_guard/viewPlans"
                className="btn btn-outline-light me-5"
              >
                View Plans
              </NavLink>
            </motion.div>
          </Nav>
          <TalkToExpert />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
