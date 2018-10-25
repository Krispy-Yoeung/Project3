import React, { Component } from "react";
import "./home.css";

import { Container, Col, Row } from "../Grid";

const Home = () => (
  <Container>
    <Row>
      <Col size="md-12">
        <div className="home-content">
          <h1>Hello comic book lovers and noobs</h1>
          <p>
          Please enjoy our website as much as we enjoy creating it. Create an account to checkout our collection of
            superheros and Villains from Marvel and DC universe. Plus find others in the community to discuss all things hero or villainy. 
          </p>
          <p />
        </div>
      </Col>
      <Col size="md-12">
        <div className="dev">
          <h2>Developers</h2>
        </div>
      </Col>
      <Col size="md-5">
        <div className="box">
          <h3 className="name">Steve Yeuong</h3>
          <img
            className="image"
            src="https://ancient-badlands-85489.herokuapp.com/assets/images/steveProfile2.jpg"
            alt="Steve Yeuong"
          />
          <div>
            Favorite superhero: <span className="bold">Superman</span> <br/>
            Favorite Villain:
            <span className="bold"> Joker</span>
          </div>
        </div>
      </Col>
      <Col size="md-2">
        {/* <div className="dev">
          <h2>Developers</h2>
        </div> */}
      </Col>

      <Col size="md-5">
        <div className="box">
          <h3 className="name">Kris Wilson</h3>
          <img
            className="image"
            src="https://ancient-badlands-85489.herokuapp.com/assets/images/krisProfile.jpg"
            alt="Kris Wilson"
          />
          <div>
            Favorite superhero: <span className="bold">Batman</span> <br/> Favorite
            Villain:
            <span className="bold"> Joker</span>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Home;
