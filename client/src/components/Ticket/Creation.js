import React from "react";
import "./Creation.css";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export const CreateTicket = ({handleOnSubmit, handleOnChange, frmDt}) => {
  console.log(frmDt)
  return <Jumbotron className="creation">
    <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Subject:</Form.Label>
            <Col sm={9}>
            <Form.Control
            name="issue"
            value={frmDt.issue}
            onChange ={handleOnChange}
            placeholder="Enter Subject"
            required
            />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Date Found:</Form.Label>
            <Col sm={9}>
            <Form.Control
            type="date"
            name="foundDate"
            value={frmDt.date}
            onChange ={handleOnChange}
            required
            />
            </Col>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
            as="textarea"
            name="description"
            rows="7"
            value={frmDt.description}
            onChange ={handleOnChange}
            placeholder="Enter your description here"
            required
            />
          </Form.Group>
          <Form.File id="exampleFormControlFile1" label="Choose file as needed" />
          <Link to = '/dashboard'>
          <Button type="Submit" block>Submit Ticket</Button>
          </Link>

        </Form>
    
    
    </Jumbotron>

{/* <Form>
<Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="name@example.com" />
</Form.Group>
<Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Label>Example select</Form.Label>
  <Form.Control as="select">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Form.Control>
</Form.Group>
<Form.Group controlId="exampleForm.ControlSelect2">
  <Form.Label>Example multiple select</Form.Label>
  <Form.Control as="select" multiple>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Form.Control>
</Form.Group>
<Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Example textarea</Form.Label>
  <Form.Control as="textarea" rows={3} />
  <Form.File id="exampleFormControlFile1" label="Example file input" />
</Form.Group>
</Form> */}
};

// CreateTicket.PropTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   frmDt: PropTypes.func.isRequired,


export default CreateTicket;



