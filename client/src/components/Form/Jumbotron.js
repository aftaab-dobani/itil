import React from 'react'
import './Jumbotron.css'
import banner from '../Images/BANNER.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import {Image} from 'react-bootstrap'
function Jumbotron() {
  return (
    <div className="jumbotron">
  <div className="container">
  <img src={banner} alt="BANNER"></img>  
  </div>
</div>
  );
}

export default Jumbotron; 