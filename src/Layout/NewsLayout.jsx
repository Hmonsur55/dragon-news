import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import LeftNav from "../Pages/Shared/LeftNav";
import RightNav from "../Pages/Shared/RightNav";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLayout;
