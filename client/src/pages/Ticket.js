import React, {useEffect, useState} from "react"; 
//Login Component 
import Creation from "../components/Ticket/Creation"
//Re Use Component 
import Navbar from "../components/Reuse/Nav"
import Footer from "../components/Reuse/Footer";
import { Form } from "react-bootstrap";


const initialFrmDt = {
    issue:'',
    issueDate: "",
    description: "",
}
export const TicketLayout = () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    useEffect(() => {}, [frmData]);

    const handleOnChange = e => {
        const {name, value} = e.target;
        console.log(name, value)

        setFrmData({
            ...frmData,
            [name]: value, 
        });
    };

    const handleOnSubmit = e => {
        e.preventDefault()

        console.log('Form submit recieved')
    }
    return (
        <div>
            <Navbar />
            <Creation handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt = {frmData} />
            <Footer />

            
        </div>
    )
}

export default TicketLayout
