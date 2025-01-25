
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import  { Toaster } from 'react-hot-toast';



const Navbar = (props) => {


    //*--- props se variables nikal lenge --- 
    let isLoggedIn = props.isLoggedIn ; 
    let setIsLoggedIn = props.setIsLoggedIn ; 
    
//?----------------------------------------------------------------------------
//?----------------------------------------------------------------------------
//?----------------------------------------------------------------------------


  return (


    <div className='nav-div'>
      
        {/* ////^---------Logo ---------  */}

        <Link to="/">
            {/* <img className='logo' src="https://images-platform.99static.com//j6lM8WJV-ucTLBfLsmA3j5TO2pQ=/683x785:1358x1461/fit-in/500x500/99designs-contests-attachments/138/138201/attachment_138201124"/> */}
            <h2> StudyNotion </h2>
        </Link>


        {/* ////^---- Nav_links buttons ---------  */}

        <nav>
            <ul>
                <li>
                    <Link to="/" > Home </Link>
                </li>

                <li>
                    <Link to="/" > About </Link>
                </li>

                <li>
                    <Link to="/" > Contact </Link>
                </li>
            </ul>
        </nav>



        {/* ////^---- creating buttons ---------  */}


        <div className='btn-div'>

        {/* //! agar user logged in nhi he to hi ye button show krenge  */}
        {/* //! handliing through checking conditions  */}


            { !isLoggedIn && 
                <Link to="/Login">
                    <button>
                        Login
                    </button>
                </Link>
            }


            { !isLoggedIn && 
                <Link to="/Signup">
                    <button>
                        SignUp
                    </button>
                </Link>
            }

            { isLoggedIn && 
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false) ; 
                        toast.success("Logged Out") ; 
                    }} >
                        LogOut
                    </button>
                </Link>
            }

            { isLoggedIn && 
                <Link to="/Dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }



        </div>


      
    </div>


  )
}

export default Navbar
