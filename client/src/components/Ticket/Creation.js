import React from "react";
import "./Creation.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const CreateTicket = () => {
  return (
    <Form className="formBox">
      <h1>Submit Ticket</h1>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label className="heading">Name</Form.Label>
        <Form.Control type="name" placeholder="Full Name" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label className="heading">Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label className="heading">Description</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>

      
      <Button className="button" type="Submit">Submit Ticket</Button>
      


    </Form>
  );
};

export default CreateTicket;
