import React from "react";
// import './homepage.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

function hnav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="LOGO"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
          </li>
          <li className="nav-item">
            <LinkContainer to="ticket">
              <Nav.Link>Tickets</Nav.Link>
            </LinkContainer>
          </li>
          <li className="nav-item">
            <LinkContainer to="/">
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default hnav;
