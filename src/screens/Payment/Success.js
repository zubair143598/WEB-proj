import React from "react";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <MainScreen title="Success">
      <Alert variant="success" className="mt-5">
        <Alert.Heading>Payment Of Project</Alert.Heading>
        <hr />
        <h1>Payment Succeed</h1>
        click on below button to go to application
      </Alert>
      <Link to="/mynotes">
        <Button className="mt-5">back to app</Button>
      </Link>
    </MainScreen>
  );
};

export default Success;
