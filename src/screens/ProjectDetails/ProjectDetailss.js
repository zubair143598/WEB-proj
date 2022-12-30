import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import back from "../../asdfg.jpeg";

const ProjectDetailss = () => {
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
          Buildings & Commercial
        </h2>
        <div className="row mb-5">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">Buildings</h3>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">Buildings</h3>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">Buildings</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">Appartments</h3>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1528734610689-348f9c3fc5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">Buildings</h3>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1606005426472-d4503e8b1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
              width="300"
              height="400"
            />
            <h3 className="fw-bold mt-2">Appartments</h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetailss