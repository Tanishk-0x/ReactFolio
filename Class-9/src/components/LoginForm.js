import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const LoginForm = ({setIsLoggedIn}) => {

    //^------------------------------------------
    //*-----------useState Hook------------------

    const [ formData , setFormData ] = useState ( 
        {
            email : "" , 
            password : "" , 
        }
    )

    //^--------------------------------------------
    //^--------------------------------------------


    //^------------------------------------------
    //*----- usestate to handle password eye visiblity -------

    const [ showPassword , setShowPassword] = useState(false) ; 

    //^------------------------------------------
    //^------------------------------------------


    //^--------------------------------------------
    //*----------- Change_Handler------------------

    function changeHandler (event) {

        setFormData( (prevData) => (
            {
            ...prevData , // copying .. 
            [event.target.name] : event.target.value  //updation .. 
            }
        ))

    }


    //^------------------------------------------
    //*----------------UseNavigate Hook ---------

    const navigate = useNavigate() ; 


    //^------------------------------------------
    //^------------------------------------------

    //^--------------------------------------------
    //*------------Sumit_Handler--------------------

    function submitHandler ( event ) {

        event.preventDefault() ; // preventing default behaviour .. 

        setIsLoggedIn(true) ; 
        toast.success("Logged In") ; 
        navigate("/dashboard") ; // navigate to dashboard 

        console.log("Printing The Data ! ") ; 
        console.log(formData) ; 
        
    }

    //^------------------------------------------
    //^------------------------------------------

//?---------------------------------------------------------------------------------
//?---------------------------------------------------------------------------------
//?---------------------------------------------------------------------------------


  return (

    <form onSubmit={submitHandler}>

        {/*---- ^ Email input field ----- */}

        <label htmlFor=''>
                <p>Email Address <sup>*</sup></p>


            <input type='email'
            placeholder='example@gmail.com' 
            required
            value={formData.email}
            onChange={changeHandler}
            name='email'
            /> 
        </label>


        {/*---- ^ PassWord input field ----- */}


        <label htmlFor=''>
                <p>Password :  <sup>*</sup></p>


            <input type= {showPassword ? ("text") : ("password") }
            placeholder='password' 
            required
            value={formData.password}
            onChange={changeHandler}
            name='password'
            className='tick'
            /> 

        {/*---- pass show and hide (EYE Logic) ----- */}
        
            <span className='eye' onClick={() => setShowPassword((prev) => !prev)}>
                { showPassword ? (<FaEye />) : (<FaEyeSlash />) }
            </span>


        {/*---- ^ Forget Password ----- */}

            <Link to="#">
                <p>
                    Forget password
                </p>
            </Link>

        </label>


        {/*---- ^ Sign In Button ----- */}

        <button className='sign-btn'> Sign in </button>



    </form>

  )
  
}

export default LoginForm 
