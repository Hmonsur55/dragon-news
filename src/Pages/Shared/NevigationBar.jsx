import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContex } from '../../authprovider/AuthProvider';

const NevigationBar = () => {
     const { user } = useContext(AuthContex);
    return (
      <Container>
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
                <Nav.Link href="/category/0">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  <Button variant="light">
                    <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                  </Button>
                )}
                {user ? (
                  <Button variant="secondary">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NevigationBar;