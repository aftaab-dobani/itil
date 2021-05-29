// import React, {component} from "react";
import React, { useState } from "react";
//Login Component
import Jumbotron from "../components/Form/Jumbotron";
import Form from "../components/Form/Form";
//Re Use Component
import Navbar from "../components/Form/Nav";
import Footer from "../components/Reuse/Footer";
import { Col } from "react-bootstrap";

export const DefaultLayout = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if(name === "username")
    setUsername(value) 
    else if(name === "password" )
    setPassword(value)

  };

//   const handleOnSubmit = e => {
//       e.preventDefault()

//       if(!username || !password){
//           alert("Fill out the login form!");
//       }
//   };

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Form
        handleOnChange={handleOnChange}
        username={username}
        password={password}
      />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
