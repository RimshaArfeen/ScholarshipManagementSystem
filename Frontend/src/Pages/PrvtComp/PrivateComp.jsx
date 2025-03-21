
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrvtComp = () => {
     const auth = localStorage.getItem("Applicants")
     return (auth ? <Outlet /> : <Navigate to="signUp"/>)
}

export default PrvtComp;