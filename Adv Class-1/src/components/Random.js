
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



//* --- .env file se data mangane ke liye ---- 
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ; 


const Random = () => {

    // //-----------------------------------------------
    // //---------------useState Hook------------------

    // // variable for setting the Gif  --- 
    // const [ gif , setGif ] = useState ('') ; 

    // // variable for loading show aur hide --- 
    // const [loading , setLoading] = useState(false) ; 

    // //-----------------------------------------------
    // //------------ Api_Calling using AXIOS ----------


    // // -- Calling Api using useEffect hook ----- 

    // async function fetchData ( ) {

    //     // --- setLoading ko true kremge ------- 
    //     setLoading(true) ; 

    //     / --- url of Api ---- 
    //       const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    //       // ------- sending get request through AXIOS --- 
    //       const {data} =  await axios.get(url) ; // api calling --> return promises 

    //       // console.log(output) ; 

    //       // //^ --  extracting image source from api ----  
    //       const imageSource = data.data.images.downsized_large.url ; 

    //       setGif(imageSource) ; // updating the State variable 

    //       // console.log(imageSource) ; 

    //       // --- setLoading ko false kremge ------- 
    //       setLoading(false) ; 

        
    // }



    // //?-- calling function at only first render -- 

    // useEffect ( () => {

    //     fetchData() ; // calling the function 

    //     },[]
    // )


    //*---------------------------------------------
    //*--Getting Data from useGif ( custom Hook ) --
    //*---------------------------------------------

    const { gif , loading , fetchData } =  useGif() ; 

    //*---------------------------------------------
    //*---------------------------------------------
    //*---------------------------------------------



    //^-----------------------------------------------
    //^------------------click Handler----------------

    function clickHandler ( ) {

      fetchData() ; // calling the function 

    }

    //^-----------------------------------------------
    //^-----------------------------------------------



  return (


    <div className='random-div'>

        <p> Random Gif </p>



        {/* //^ -- showing image aur spinner -------  */}

        {
          loading ? (<Spinner/>) : ( <img src= {gif} /> )
        }



        <button  onClick={clickHandler} >
             Generate 
        </button>


      
    </div>



  )


}

export default Random
