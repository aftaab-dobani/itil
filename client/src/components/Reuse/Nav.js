import React from 'react'
// import './homepage.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../Images/logo.png'


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

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Create Ticket
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tickets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default hnav;