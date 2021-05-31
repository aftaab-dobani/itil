import React from "react";
import "./dashboard.css";
import cat from "../Images/download.png";
import fill from "../Images/download2.png";
import mountain from "../Images/download3.png";
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
  Accordion,
  Card,
  CardHeader,
  CardDeck,
  CardFooter,
  AccordionCollapse,
  AccordionToggle,
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
      <Table striped bordered hover="sm" className="tablecontainer">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Open Date</th>
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
        </tbody>
      </Table>
      <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Review Current Outgoing Tickets
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This card has even longer
                      content than the first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Accordion.Collapse>
          </Card>
      </Accordion>
      <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Review Current Outgoing Tickets
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This card has even longer
                      content than the first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Accordion.Collapse>
          </Card>
      </Accordion>
    </Form>
  );
}

export default Test;
