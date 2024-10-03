import { Outlet, Navigate } from "react-router-dom";
import React from 'react'

const ProtectedRoutes = () => {

    const token = localStorage.getItem('Token')
    return (
        token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default ProtectedRoutes