import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">terms of service</a></li>
            <li><a href="#">privacy policy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">support</a></li>
            <li><a href="#">contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
 </footer>
  );
};

export default Footer;
