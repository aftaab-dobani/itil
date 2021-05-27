import React, {component} from "react"; 
//Login Component 
import Jumbotron from "../components/Form/Jumbotron"
import Form from "../components/Form/Form"
//Re Use Component 
import Navbar from "../components/Reuse/Nav"


export const DefaultLayout = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Form />
        </div>
    )
}

export default DefaultLayout
