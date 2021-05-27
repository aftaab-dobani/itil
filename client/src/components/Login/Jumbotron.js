import React from 'react'
import './Jumbotron.css'
import banner from '../images/BANNER.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
function Jumbotron() {
  return (
    <div class="jumbotron">
  <div class="container">
  <img src={banner} alt="BANNER"></img>  
  </div>
</div>
  );
}

export default Jumbotron; 