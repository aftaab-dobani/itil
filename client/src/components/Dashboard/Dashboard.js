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
  CardTitle,
  CardText,
  CardImg,
  CardFooter,
  AccordionCollapse,
  AccordionToggle,
  ListGroup,
  ListGroupItem,
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

      <div classname="creation-container">
        <div className="mb-2">
          <Link to="/ticket">
            <Button variant="primary" size="lg">
              Create Ticket
            </Button>{" "}
          </Link>
        </div>
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
            <td>Bootstrap Error</td>
            <td>Pending Response</td>
            <td>5/28/21</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Syntax Error</td>
            <td>Completed</td>
            <td>5/27/21</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Heroku Deployment</td>
            <td>Completed</td>
            <td>5/27/21</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Database </td>
            <td>Completed</td>
            <td>5/26/21</td>
          </tr>
        </tbody>
      </Table>
      <div className="cardstyle">
        <Card style={({ width: "18rem" }, { margin: "10px" })}>
          <Card.Body>
            <Card.Title>Server Backend</Card.Title>
            <Card.Text>
              Right now backend server infrastructure consists around 150
              servers and this number is rising constantly. Unfortunately you
              can't solve some critical bugs or infrastructure problems only
              with server number increase. Many issues popping up only with high
              load testing.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Pending</ListGroupItem>
            <ListGroupItem>5/28/21</ListGroupItem>
          </ListGroup>
        </Card>
        <Card style={({ width: "18rem" }, { margin: "10px" })}>
          <Card.Body>
            <Card.Title>Issue with Certificate</Card.Title>
            <Card.Text>
              An SSL certificate error occurs when a web browser can't verify
              the SSL certificate installed on a site. Rather than connect you,
              your browser will display an error message, warning you that the
              site may be insecure. This has deterred potential clicks and
              internet traffic.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Pending</ListGroupItem>
            <ListGroupItem>5/28/21</ListGroupItem>
          </ListGroup>
        </Card>
        <Card style={({ width: "18rem" }, { margin: "10px" })}>
          <Card.Body>
            <Card.Title>Bootstrap Error</Card.Title>
            <Card.Text>
              I am doing a html5/JS application with Nodejs on Netbeans 8.2. I
              am doing the welcome page and I would like to use Bootstrap 5. But
              when I add bootstrap.min.css in my stylesheets folder I have an
              error, see the image below. However when I add the
              bootstrap.min.css from Bootstrap 4 I have no issue.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Pending</ListGroupItem>
            <ListGroupItem>5/28/21</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Review Resolved Tickets
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title>Syntax Error</Card.Title>
                  <Card.Text>
                    Instead of the ` ` symbol, you were using ''. After making those changes, your code was working again.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 days ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Heroku Deployment</Card.Title>
                  <Card.Text>
                    You were updating all of your code to your branch, but not pushing it up to heroku main.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 days ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Database</Card.Title>
                  <Card.Text>
                  The schema files were not formatted properly, which caused information from your database to not properly populate the page.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 days ago</small>
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
