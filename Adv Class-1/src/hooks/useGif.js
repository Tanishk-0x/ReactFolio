
import React from 'react'
import { useState  } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


//~---------------- CUSTOM HOOK ----------------------

//* --- .env file se data mangane ke liye ---- 
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ; 




const useGif = ( tag ) => {

    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ; 

    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` ; 


    //^-----------------------------------------------
    //^---------------useState Hook------------------

    // variable for setting the Gif  --- 
    const [ gif , setGif ] = useState ('') ; 

    // variable for loading show aur hide --- 
    const [loading , setLoading] = useState(false) ; 


    //^-----------------------------------------------
    //^------------ Api_Calling using AXIOS ----------


    //? -- Calling Api using useEffect hook ----- 

    async function fetchData ( tag ) {

        //* --- setLoading ko true kremge ------- 
        setLoading(true) ; 

        
          //* ------- sending get request through AXIOS --- 
          const {data} =  await axios.get( tag ? tagMemeUrl : randomMemeUrl ) ; // api calling --> return promises 

          // console.log(output) ; 

          // //^ --  extracting image source from api ----  
          const imageSource = data.data.images.downsized_large.url ; 

          setGif(imageSource) ; // updating the State variable 

          // console.log(imageSource) ; 

          //* --- setLoading ko false kremge ------- 
          setLoading(false) ; 

        
    }



    //?-- calling function at only first render -- 

    useEffect ( () => {

        fetchData('tom and jerry') ; // calling the function 

        },[]
    )


    //***************************************/
    //*--------- returning -----------------  

    return { gif , loading , fetchData } ; 

    //*--------------------------------------
    //****************************************/


 
}

export default useGif
