import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="my-5">
      <Container>
        <div className="text-center">
          <img src={logo} alt=" Dragon logo" />
          <p className="text-secondary">Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className="d-flex">
          <Button variant="danger">Latest</Button>
          <Marquee className="text-warning" speed={100} pauseOnHover={true}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
        <div>
          <Navbar
            className="my-3"
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
          >
            <Container>
              <Navbar.Brand href="#home"></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#pricing">About</Nav.Link>
                  <Nav.Link href="#pricing">Career</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">
                    <Button variant="light">Profile</Button>
                  </Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <Button variant="secondary">Secondary</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Container>
    </div>
  );
};

export default Header;
