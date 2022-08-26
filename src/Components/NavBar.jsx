import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logo.jpg";
import { NavLink } from "react-router-dom";
import TalkToExpert from "./TalkToExpert";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          TRANSIT GUARD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="btn btn-outline-light me-2">
              Home
            </NavLink>
            <NavLink to="/aboutUs" className="btn btn-outline-light me-2">
              About us
            </NavLink>
            <NavLink to="/contactUs" className="btn btn-outline-light me-2">
              Contact us
            </NavLink>
          </Nav>
          <Nav className="auto">
            <NavLink to="/viewPlans" className="btn btn-outline-light me-5">
              View Plans
            </NavLink>
          </Nav>
            <TalkToExpert/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
