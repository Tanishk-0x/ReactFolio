
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {


    //?-----------------------------------------------------
    //?--------------useState Hook -------------------------

    const [input , setInput ] = useState ( 
        {
            name : "" , 
            email : "" , 
            password : "" , 
        }
    ); 

    //?-----------------------------------------------------
    //?-----------------------------------------------------


    //?-----------------------------------------------------
    //?------------------useNavigate Hook-------------------

    const navigate = useNavigate() ; 

    //?-----------------------------------------------------
    //?-----------------------------------------------------


    //?-----------------------------------------------------
    //?-----------------Change_Hand-------------------------

    function changeHandler ( event ) {

        setInput ( {

            ...input , //* -- copying ---- 
            [event.target.name] : event.target.value //* updation

        })

    }

    //?-----------------------------------------------------
    //?-----------------------------------------------------


    // console.log(input) ; 

    //?-----------------------------------------------------
    //?--------------Form_Submit_Handler--------------------

    // * --- to store value in local Storage ----

    function submitHandler ( event ) {

        event.preventDefault() ; 

        //^-- setting into local storgae bu key : value --- 
        // localStorage.setItem("key" , "value") ; 
        //? we can not store object directly in local storage so we converts into string 
        //? by using JSON.Stringify method 

        //*-------------------------------------------------------
        //*-------------------------------------------------------
        localStorage.setItem( "user" , JSON.stringify(input) ) ; 
        //*-------------------------------------------------------
        //*-------------------------------------------------------

        navigate("/login") ; // navigating .. 

    }

    //?-----------------------------------------------------
    //?-----------------------------------------------------
    //?-----------------------------------------------------
    //?-----------------------------------------------------



  return (

    // <div className='register-div'>

    <form onSubmit={submitHandler} className='register-div'>


        <h1> Create An Account </h1>

        <input type='text'
        id='name'
        name='name'
        value={input.name}
        onChange={changeHandler}
        />

        <label htmlFor='name'> Your Name</label>


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


        <button> Register </button>



        <p> Have already an account 
            <Link to={"/login"}> 
                <span> Login here </span>
            </Link>
        </p>



    </form>   
      
    // </div>


  )
}

export default Register
