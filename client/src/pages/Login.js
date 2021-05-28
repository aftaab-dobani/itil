// import React, {component} from "react";
import React, { useState } from "react";
//Login Component
import Jumbotron from "../components/Form/Jumbotron";
import Form from "../components/Form/Form";
//Re Use Component
import Navbar from "../components/Reuse/Nav";

export const DefaultLayout = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Form
        handleOnChange={handleOnChange}
        username={username}
        password={password}
      />
    </div>
  );
};

export default DefaultLayout;
