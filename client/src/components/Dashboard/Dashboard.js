import React from "react";
import './dashboard.css'
import cat from '../Images/cat.jpg'
import fill from '../Images/fill.jpg'
import mountain from '../Images/mountain.jpg'

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
    <Form className='form'>
      <Alert variant="dark" className="alert">
        <Alert.Heading>Welcome to ITIL Ticketing Service</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
      <Table striped bordered hover="sm" className="tablecontainer">
        <thead>
          <tr>
            <th>#</th>
            <th>Namne</th>
            <th>Issue</th>
            <th>Created</th>
            <th>Severity</th>
            <th>Office</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mike Oxlong</td>
            <td>Styling Error</td>
            <td>5/28/21</td>
            <th>Major</th>
            <th>Front End</th>
          </tr>
          <tr>
            <td>2</td>
            <td>Steve Buschemi</td>
            <td>DB Routing</td>
            <td>5/28/21</td>
            <th>Major</th>
            <th>Back End</th>
          </tr>
          <tr>
            <td>3</td>
            <td>Joe Rogan</td>
            <td> Server Bug</td>
            <td>5/28/21</td>
            <th>Major</th>
            <th>Back End</th>
          </tr>
        </tbody>
      </Table>
      <Carousel className="containerBox">
        <Carousel.Item interval={1000}>
          <img className="img" src={cat} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="img" src={fill} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src={mountain} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Form>
  );
}

export default Test;
