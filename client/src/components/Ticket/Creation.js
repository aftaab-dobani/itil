import React from "react";
import "./Creation.css";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types'

export const CreateTicket = ({handleOnSubmit, handleOnChange, frmDt}) => {
  console.log(frmDt)
  return <Jumbotron>
    <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Subject</Form.Label>
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
            <Form.Label column sm={3}>Date Found</Form.Label>
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
            placeholder="Enter Password"
            required
            />
          </Form.Group>

          <Button type="Submit" block>Submit Ticket</Button>
        </Form>
    
    
    </Jumbotron>
};

// CreateTicket.PropTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   frmDt: PropTypes.func.isRequired,


export default CreateTicket;
