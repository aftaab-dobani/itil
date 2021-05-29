import React, {component} from "react"; 
//Login Component 

//Re Use Component 
import Navbar from "../components/Reuse/Nav"
import Footer from "../components/Reuse/Footer";


export const ReviewLayout = () => {
    return (
        <div>

            <Navbar />
            <Footer />
            
        </div>
    )
}

export default ReviewLayout
