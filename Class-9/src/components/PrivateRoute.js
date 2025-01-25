import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn , children}) => {


    //*----------------------------------------------
    //*--logic to check is user is logged in or not 
    //* if logged in then sent it to the dashboard 
    //* otherwise sent back to login page ------------


        if ( isLoggedIn ) {
            return children ; 
        }

        else {
            <Navigate to="/login" /> 
        }


}

export default PrivateRoute
