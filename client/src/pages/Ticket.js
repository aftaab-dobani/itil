import React, {component} from "react"; 
//Login Component 
import Creation from "../components/Ticket/Creation"
//Re Use Component 
import Navbar from "../components/Reuse/Nav"


export const TicketLayout = () => {
    return (
        <div>
            <Navbar />
            <Creation />
            
        </div>
    )
}

export default TicketLayout
