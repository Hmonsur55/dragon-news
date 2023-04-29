import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import bg1 from '../../assets/bg.png'
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
import QZone from "./QZone";

const RightNav = () => {
  return (
    <div>
      {/* loogin with  */}
      <div>
        <h3 className="font-bold">Login With</h3>
        <div className="d-flex flex-column gap-2">
          <Button variant="outline-primary">
            <FaGooglePlusG></FaGooglePlusG>google
          </Button>
          <Button variant="outline-secondary">
            <FaGithub></FaGithub>Github
          </Button>
        </div>
      </div>

      {/* Find us */}
      <div className="my-3">
        <h3>Find us on</h3>
        <ListGroup>
          <ListGroup.Item className="py-3 pointer">
            <FaFacebookF></FaFacebookF> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <FaTwitter></FaTwitter> Twiteer
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className=" ">
        {/* <div>
          <img src={bg1} alt="" />
        </div> */}
        <div className="py-3 text-center text-white bg-secondary ">
          <h2>Create an Amazing Newspaper</h2>
          <p className="my-5">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
