import React, {component} from "react"; 

import Nav from "../components/Reuse/Nav"
import Dashboard from '../components/Dashboard/Dashboard'
import Footer from '../components/Reuse/Footer'

export const DashboardLayout = () => {
    return (
        <div>
            <Nav />
            <Dashboard />
            <Footer/>
        </div>
    )
}

export default DashboardLayout
