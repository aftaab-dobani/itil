import React, {component} from "react"; 
//Login Component 

//Re Use Component 
import Navbar from "../components/Reuse/Nav"
import Review from '../components/Review/Review'
import Footer from "../components/Reuse/Footer";


export const ReviewLayout = () => {
    return (
        <div>

            <Navbar />
            <Review />
            <Footer />
            
        </div>
    )
}

export default ReviewLayout
