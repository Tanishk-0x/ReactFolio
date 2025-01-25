
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LAbs = () => {


  //?----------------------------------------------
  //*------------UseNavigate Hook ------------------
  //?------------------------------------------------

  //~------------------------------------------
      const navigate = useNavigate() ; 
  //~------------------------------------------

      function clickHandler ( ) {

          // moving to About page through useNavigate hook
        //^-- using useNavigate hook ... 
        navigate("/About") ; // moving 

      }


      function backHandler () {
        navigate ( -1 ) ; // for going back 
      }



  //?------------------------------------------------
  //?------------------------------------------------
  //?------------------------------------------------


  return (

        <div>

            <div>
                <h1> This is LABS Page --- </h1>
            </div>

           {/* //^ --- Navigation Button _----  */}
            <button onClick={clickHandler}> Move to About Page </button>

            {/* //^ --- Back button_ ------ */}
            <button onClick={backHandler}> Go back </button>


        </div>


  )
}

export default LAbs
