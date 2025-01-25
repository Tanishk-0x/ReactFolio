import { Outlet } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import React from 'react'

const ProtectedRouted = () => {


    //?-----------------------------------------------------
    //?-----------------------------------------------------

    //*  cheking if user is logged in ot not if it is logged in so only it can 
    //* accesss "/" home page otherwise it redirected to "/login" page 

    const auth = localStorage.getItem("loggedin") ; 


    return auth ? <Outlet/> : <Navigate to={"/login"} /> ; 
    

    //?-----------------------------------------------------
    //?-----------------------------------------------------


}

export default ProtectedRouted
