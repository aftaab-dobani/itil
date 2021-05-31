import React from 'react'
import './Jumbotron.css'
import banner from '../Images/BANNER.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import {Image} from 'react-bootstrap'
function Jumbotron() {
  return (
  <Image src={banner} alt='BANNER' fluid className='img' />
  );
}

export default Jumbotron; 