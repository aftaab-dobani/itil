import React, {component} from "react"; 

import Nav from "../components/Reuse/Nav"
import Slides from "../components/Dashboard/Slides"
import Table from "../components/Dashboard/Table"

export const DashboardLayout = () => {
    return (
        <div>
            <Nav />
            <Dashboard />
        </div>
    )
}

export default DashboardLayout
