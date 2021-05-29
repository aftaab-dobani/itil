import react from 'react'
import './Form.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import Navbar from "./Nav";

export const formBox = ({handleOnChange, username, password}) => {
  return (
    <Container className="formBox">
      <Row>
        <Col>
        <h1> User Login </h1>
        <hr />
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
            type="username"
            name="username"
            value={username}
            onChange ={handleOnChange}
            placeholder="Enter Username"
            required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            name="password"
            value={password}
            onChange ={handleOnChange}
            placeholder="Enter Password"
            required
            />
          </Form.Group>

          <Button type="Submit">Login</Button>
        </Form>
        </Col>
      </Row>

      
    </Container>
  )
}
  
export default formBox;