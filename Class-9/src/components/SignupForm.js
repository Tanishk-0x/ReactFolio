
import React, { useEffect, useState } from 'react'
import { Icons, toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const SignupForm = ({setIsLoggedIn}) => {



    //^-------------------------------------------
    //*---------useNavigate Hook ----------------

    const navigate = useNavigate() ; 

    //^-------------------------------------------
    //^-------------------------------------------


    //^-------------------------------------------
    //*---------useState Hook ----------------

    const [ formData , setFormData ] = useState ( 
        {
            firstname : "" , 
            lastname : "" , 
            email : "" , 
            password : "" , 
            confirmpassword : "" , 
            accountType : "" , 
        }
    )

    //^------------------------------------------
    //^------------------------------------------


    //^-------------------------------------------
    //*--------- Change_Handler ----------------

    function changeHandler (event) {

        setFormData( (prevData) => (
            {
            ...prevData , // copying 
            [event.target.name] : event.target.value  // updation 
            }
        ))

    }

    //^------------------------------------------
    //^------------------------------------------


    //^-------------------------------------------
    //*---- useState Hook = password Show aur Hide krne ke liye ------

    const [ showPassword , setShowPassword ] = useState (false) ;  

    //^-------------------------------------------
    //^-------------------------------------------



    //^-------------------------------------------
    //*---- useState Hook = account ype keliye student / instructor ------

    const [ accountType , setAccountType ] = useState("student")



    //^-------------------------------------------
    //^-------------------------------------------


    //^-------------------------------------------
    //*--------- Submit Handler  -----------------

    function submitHandler ( event ) {

        event.preventDefault() ; 

        // checking password and confirm_password 
        if ( formData.password != formData.confirmpassword ) {
            toast.error("Password MisMatched") ; 
            return ; 
        }

        setIsLoggedIn(true) ;
        toast.success("Account Created") ;  

        const accountData = {
            ...formData 
        }; 
        console.log("Printing the Account Data ") ; 
        console.log(accountData) ; // display the form data 

        navigate("/dashboard") ; // navigate to  the dashboard 

    }

    //^-------------------------------------------    
    //^-------------------------------------------
    //^-------------------------------------------


//?-----------------------------------------------------------------------------------
//?-----------------------------------------------------------------------------------
//?-----------------------------------------------------------------------------------



  return (

    <div>
        
        <div className='btnswi-div'>


        {/* //^--- toggleing student / instructor logic ----  */}


            <button
            onClick={ () => setAccountType("student")} >
                Student
            </button>

            <button onClick={ () => setAccountType("instructor") } > 
                Instructor
            </button>

        </div>


        <form onSubmit={submitHandler}>


            {/* //! first name and last name field  */}
            <div className='names'>
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input required
                    type='text'
                    name='firstname'
                    onChange={changeHandler}
                    placeholder='enter first name'
                    value={formData.firstname}
                    />
                </label>


                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input required
                    type='text'
                    name='lastname'
                    onChange={changeHandler}
                    placeholder='enter last name'
                    value={formData.lastname}
                    />
                </label>
            </div>


            {/* //! ----email address field ----  */}
            <div className='email-div'>
            <label>
                    <p>Email Address  <sup>*</sup></p>
                    <input required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='enter email '
                    value={formData.email}
                    />
            </label>
            </div>


            {/* //!--- create and confirm passwoprd field  */}

            <div className='pass-div'>

                <label className='pass'>
                    <p>Create password <sup>*</sup></p>
                    <input required
                    type= {showPassword ? ("text") : ("password") }
                    name='password'
                    onChange={changeHandler}
                    placeholder='password'
                    value={formData.password}
                    />

                    {/*^ --- password hide and show icon logic ---  */}
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        { showPassword ? (<FaEye />) : (<FaEyeSlash />) }
                    </span>
                </label>

                <label className='con-pass'>
                    <p>Confirm password <sup>*</sup></p>
                    <input required
                    type= {showPassword ? ("text") : ("password") }
                    name='confirmpassword'
                    onChange={changeHandler}
                    placeholder=' confirm password'
                    value={formData.confirmpassword}
                    />

                    {/*^ --- password hide and show icon logic ---  */}
                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        { showPassword ? (<FaEye />) : (<FaEyeSlash />) }
                    </span>
                </label>

            </div>


            <button className='create-btn'> Create Account </button>


        </form>

        
    </div>



  )


}

export default SignupForm
