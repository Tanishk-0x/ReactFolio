import { Link } from 'react-router-dom'
import { useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {


    //?-----------------------------------------------------
    //?------------------useState Hook ----------------------


    const [input , setInput ] = useState ( 
        {
            email : "" , 
            password : "" , 
        }
    ); 

    //?-----------------------------------------------------
    //?-----------------------------------------------------


    //?-----------------------------------------------------
    //?----------------useNavigate Hook -----------------------------

    const navigate = useNavigate() ; 

    //?-----------------------------------------------------
    //?-----------------------------------------------------



    //?-----------------------------------------------------
    //?------------------Change_Handler --------------------


    function changeHandler ( event ) {

        setInput ( {

            ...input , //* -- copying ---- 

            [event.target.name] : event.target.value //* updation

        })

    }

    //?-----------------------------------------------------
    //?-----------------------------------------------------


    //?-----------------------------------------------------
    //?--------------- Form_Submit_Handler -----------------


    function submitHandler ( event ) {

        event.preventDefault() ; 

        //*--- getting info from local storage --- 
        //?----- string to object using JSON.parse ---- 

        const loggedUser = JSON.parse ( localStorage.getItem( "user" ) ) ;
        
        //^-- Matching email and password to check ---- 

        if ( input.email === loggedUser.email && input.password === loggedUser.password ) {
            
            localStorage.setItem("loggedin", true) ; // mark logged in : true 
            navigate("/") ; 

        }

        else {
            toast.warning("Invalid Email or Password") ; 
        }
    }

    //?-----------------------------------------------------
    //?-----------------------------------------------------



  return (

    <form onSubmit={submitHandler} className='login-div'>


        <h2> Welcome back </h2>

        <input type='email'
        id='email'
        name='email'
        value={input.email}
        onChange={changeHandler}
        />

        <label htmlFor='email'> Your Email</label>


        <input type='password'
        id='password'
        name='password'
        value={input.password}
        onChange={changeHandler}
        />

        <label htmlFor='password'> Password </label>


        <button> Login </button>


        <p> Don't have an account 
            <Link to={"/register"}> 
                <span> Register here </span>
            </Link>
        </p>

      
    </form>


  )
}

export default Login
