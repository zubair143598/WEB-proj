import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProjectDetail.css";
import back from "../../asdfg.jpeg";
const ProjectDetails = () => {
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
              Project Details
            </h1>
            <Link to="/register">
              <Button size="lg" className="landingbutton">
                Let's Build
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="container vh-50 text-center mt-5">
        <h2 className="display-4 mb-5 fw-bold text-uppercase">
          House and Appartments
        </h2>
        <div className="row mb-5">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">House</h3>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">House</h3>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">Appartment</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1615653051334-fbda22a83dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">House</h3>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1549357957-99ab8644c268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">Appartment</h3>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1503627381655-17cf0637efc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">Appartment</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
