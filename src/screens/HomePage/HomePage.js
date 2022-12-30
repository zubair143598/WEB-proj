import React from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import back from "../../asdfg.jpeg";
import house3 from "../../house3.jpg";
const HomePage = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height="700"
            src={back}
            alt="First slide"
          />
          <Carousel.Caption style={{ marginBottom: 80 }}>
            <h1 className="fw-bold" style={{ fontSize: 80 }}>
              Online Architect System
            </h1>
            <Link to="/register">
              <Button size="lg" className="landingbutton">
                Let's Build
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="vh-50 text-center mt-5">
        <p style={{ fontSize: 40, padding: 140 }}>
          Online Architect System are prefabricated, fully finished, modular units. By a
          lake, deep in a forest, at the edge of a field, a steep mountain hill
          or your city rooftop! Make your dream come true, installed in one day,
          no extra on-site work.
        </p>
        <hr className="border-primary" />
      </section>
      <section className="vh-50 text-center mt-5">
        <h2 className="display-4 fw-bold text-uppercase">Project in Works</h2>
        <div className="row p-5">
          <div className="col-md-6">
            <div>
              <img src={house3} width="400" height="400" alt="img" />
              <h3 className="mt-3 fw-bold">House & Appartments</h3>
              <Link to="/houses">
                <Button variant="outline-primary">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={back} width="400" height="400" alt="img" />
              <h3 className="mt-3 fw-bold">Buildings and Commercial</h3>
              <Link to="/buildings">
                <Button variant="outline-primary">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-primary" />
    </>
  );
};

export default HomePage;
