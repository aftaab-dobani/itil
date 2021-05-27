import React from 'react'
import './Nav.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/logo.png'
function Nav() {
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

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#work">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Our Mission
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./images/resume.pdf">
              Customer Feedback
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;