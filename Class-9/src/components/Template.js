import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FaGoogle } from "react-icons/fa";


// *//---- recieve krenge ---- 

const Template = ({title , desc1 , desc2 , image , formtype , setIsLoggedIn }) => {
  
    return (

  //*--------------------------------------------------------------------------------- 
  //*---------------------------------------------------------------------------------      
     

    <div className='template-div'>

        {/* //--------  form inputs div --------  */}

        <div className='temp-outer'>


            <h1> {title} </h1>
            <p>
                <span>{desc1}</span>
                <br/>
                <span>{desc2}</span>
            </p>


            {/* //^----- condtion to check which form to render ----- */}

            {formtype === "signup" ? 
                (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : 
                (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
            }


            <div>
                <div></div>
                <p> OR </p>
                <div></div>
            </div>



            <button className='sign-google'>
                <FaGoogle />
                <p>Sign up with Google</p>
            </button>


        </div>
        

        {/* //------ Image Div --------------  */}


        <div className='side-img-div'>

            <img src={image} 
            width={558}
            height={490}
            loading='lazy'
            />

        </div>

      
    </div>


  )
}

export default Template
