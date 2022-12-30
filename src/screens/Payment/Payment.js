import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
const Payment = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState();
  const [amount, setAmount] = useState();
  return (
    <MainScreen title="Payment">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="number"
            value={card}
            placeholder="Enter Card Number"
            onChange={(e) => setCard(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Link to="/success">
          <Button variant="outline-success">Send</Button>
        </Link>
      </Form>
    </MainScreen>
  );
};

export default Payment;
