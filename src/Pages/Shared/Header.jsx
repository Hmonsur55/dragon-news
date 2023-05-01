import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
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
         
        </div>
      </Container>
    </div>
  );
};

export default Header;
