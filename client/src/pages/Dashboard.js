import React, {component} from "react"; 

import Nav from "../components/Dashboard/Nav"
import Dashboard from '../components/Dashboard/Dashboard'

export const DashboardLayout = () => {
    return (
        <div>
            <Nav />
            <Dashboard />
        </div>
    )
}

export default DashboardLayout
