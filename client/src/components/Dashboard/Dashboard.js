import React from "react";
import "./dashboard.css";
import cat from "../Images/download.jpg";
import fill from "../Images/download2.jpg";
import mountain from "../Images/download3.jpg";
import { Link } from "react-router-dom";



import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Carousel,
  CarouselItem,
  CarouselProps,
  Alert,
} from "react-bootstrap";
import logo from "../Images/logo.png";

function Test() {
  return (
    <Form className="form">
      <Alert variant="dark" className="alert">
        <Alert.Heading>Welcome to ITIL Ticketing Service</Alert.Heading>
        <p>
          Having an issue with a database problem? Getting an error trying to
          commit a change? Reach out to one of our Technical assistants and they
          will be able to help you as soon as possible.
        </p>
        <hr />
        <p className="mb-0">Whatever you need is right at your fingertips.</p>
      </Alert>
      <div className="mb-2">
        <Link to="/ticket">
          <Button variant="primary" size="lg">
            Create Ticket
          </Button>{" "}
        </Link>
      </div>

      <div>
        <Form>
          <Form.Group as ={Row}>
            <Form.Label column ms={2}>
              Search:{" "}
              </Form.Label>
            <Col ms="10">
            <Form.Control
            name="searchStr"
            placeholder="Search ..."
            />
            </Col>
          </Form.Group>
        </Form>
      </div>
      

      <Table striped bordered hover="sm" className="tablecontainer">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Date Found</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Server Backend</td>
            <td>Pending Response</td>
            <td>5/28/21</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Issue with Certificate</td>
            <td>Pending Response</td>
            <td>5/28/21</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Styling Error</td>
            <td>Pending Response</td>
            <td>5/28/21</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Syntax Error</td>
            <td>Completed</td>
            <td>5/29/21</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Heroku Deployment</td>
            <td>Completed</td>
            <td>5/30/21</td>
          </tr>
        </tbody>
      </Table>
      <Carousel className="containerBox">
        <Carousel.Item interval={1000}>
          <img className="img" src={cat} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="img" src={fill} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={mountain} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Form>
  );
}

export default Test;
