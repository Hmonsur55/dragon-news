import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Header from '../Pages/Shared/Header';
import LeftNav from '../Pages/Shared/LeftNav';
import NevigationBar from '../Pages/Shared/NevigationBar';
import RightNav from '../Pages/Shared/RightNav';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <NevigationBar></NevigationBar>
        <Container>
          <Row>
            <Col lg={3}><LeftNav></LeftNav></Col>
            <Col lg={6}><Outlet></Outlet></Col>
            <Col lg={3}><RightNav></RightNav></Col>
          </Row>
        </Container>
      </div>
    );
};

export default Main;