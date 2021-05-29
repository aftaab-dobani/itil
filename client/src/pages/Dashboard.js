import React, {component} from "react"; 

import Nav from "../components/Reuse/Nav"
import Slides from "../components/Dashboard/Slides"
import Table from "../components/Dashboard/Table"
import Footer from "../components/Reuse/Footer";

export const DashboardLayout = () => {
    return (
        <div>
            <Nav />
            <Slides />
            <Table />
            <Footer />
        </div>
    )
}

export default DashboardLayout
