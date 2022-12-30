import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import backg from "../../test1.jpg";
import house1 from "../../house1.jpg";
import house2 from "../../house2.jpg";

const ProjectScreen = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="900"
            src={backg}
            alt="First slide"
          />
          <Carousel.Caption style={{ marginBottom: 240 }}>
            <h1 className="fw-bold text-uppercase" style={{ fontSize: 100 }}>
              Some Recent Proejcts
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
        <h2 className="display-4 fw-bold text-uppercase">
          Let's Choose Your Project
        </h2>
        <div className="row p-5">
          <div className="col-md-6">
            <div>
              <img src={house1} width="400" height="400" alt="img" />
              <h3 className="mt-3 fw-bold">House & Appartments</h3>
              <Link to="/houses">
                <Button variant="outline-primary">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={house2} width="400" height="400" alt="img" />
              <h3 className="mt-3 fw-bold">Buildings and Commercial</h3>
              <Link to="/buildings">
                <Button variant="outline-primary">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="vh-50 text-center mt-2">
        <div className="row p-5">
          <div className="col-md-6">
            <div>
              <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" width="400" height="400" alt="img" />
              <h3 className="mt-3 fw-bold">House & Appartments</h3>
              <Link to="/houses">
                <Button variant="outline-primary">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={backg} width="400" height="400" alt="img" />
              <h3 className="mt-3 fw-bold">Buildings and Commercial</h3>
              <Link to="/buildings">
                <Button variant="outline-primary">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectScreen;
