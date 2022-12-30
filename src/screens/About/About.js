import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="900"
            src="./Images/ourmission.jpeg"
            alt="First slide"
          />
          <Carousel.Caption style={{ marginBottom: 240 }}>
            <h1 className="fw-bold text-uppercase" style={{ fontSize: 100, color: 'green' }}>
              About Us
            </h1>
            <Link to="/register">
              <Button size="lg" className="landingbutton">
                Let's Build
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <p id="ourMP">
          <h1>Our Mission</h1>
          We should attempt to bring nature, houses, and human beings together
          in a higher unity{" "}
          <b>
            {" "}
            Architecture should speak of its time and place, but yearn for
            timelessness.
          </b>
          ” “There are no straight lines or sharp corners in nature. Therefore,
          buildings must have no straight lines or sharp corners
        </p>
      </div>
      <div className="container">
        <p class="aboutleft">
          <h1>Extraordinary Experiences</h1>We have Experience team in building
          design and construction,interior and exterior solution and
          renovation.in commercial building,residential
          home,Hospital,School,masjid,park,flats,museum,Our team is fully
          qualified to deliver the best design and construction with maximum
          effort.
        </p>

        <p class="aboutright">
          {" "}
          <h1>Our Core Values</h1>1) Design/construction/renovation
          <br />
          2 Create suitable and efficient house plans proposal.
          <br />
          3) Interior and Exterior Design.
          <br />
          4) Beautiful renders of your dream house.
          <br />
          5) Plans approval from respective society.
          <br />
          House drawing, House elevation,
          <br />
          3D house elevation,
          <br />
          Architectural drawings,
          <br />
          Structural drawings ,<br />
          Plumbing drawings,
          <br />
          Electrical drawings,
          <br />
          Approval of drawings,
          <br />
          And complete supervision of your project
        </p>
      </div>
      <p id="image"></p>
    </>
  );
};

export default About;
