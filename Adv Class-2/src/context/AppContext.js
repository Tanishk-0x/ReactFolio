import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import App from "../App";
import { useNavigate } from "react-router-dom";



//*--------- step 1 : create a context ------------
//*------ step 2 : provider create krenge --------
//^ --- {children} = jo tags ke andar he 
//*------------------------------------------------



//!---STEP : 1 -------

    //*-----------------------------------------
    //*-----------------------------------------

        export  const AppContext = createContext() ;

    //*-----------------------------------------
    //*-----------------------------------------




    export default function AppContextProvider ( {children} ) {


        //*-----------------------------------------
        //*-----------------------------------------
        //----------- usestate Hooks ------------------
        const [ loading , setLoading ] = useState(false) ;
        
        const [ posts , setPosts ] = useState( [] ) ; 

        const [ page , setPage ] = useState(1) ; 

        const[ totalPages , setTotalPages ] = useState(null) ; 

        //*-----------------------------------------
        //*-----------------------------------------


        const navigate = useNavigate() ; 



        //*-----------------------------------------
        //*-----------------------------------------
        //^----------- Data Filling ---------------




        async function fetchBlogPosts( page = 1 , tag = null , category ) {

            // --- showing the loader ---- 
            setLoading(true) ; 

            //^----------------------------------
            //^-------------- url ---------------- 

            let url = `${baseUrl}?page=${page}` ; 

            //^------------------------------------
            //^------------------------------------
            //^ -- handling different page logic -- 
            //* -- changing url according to condition --- 

            if ( tag ) {
                url += `&tag=${tag}` ; 
            }

            if ( category ) {
                url += `&category=${category}` ; 
            }


            //*-----------------------------------------
            //*-----------------------------------------

            //^ ------- Api _Calling ----------------
                try {

                    const result = await fetch(url) ; // fetching 
                    const data = await result.json() ; // parse into json 
                    console.log(data) ; 

                    //--- setting the value ----- 
                    setPage(data.page) ; 
                    setPosts(data.posts) ; 
                    setTotalPages(data.totalPages) ; 

                }

                catch (error) {
                    //---returning to initial stages ---
                    console.log("Error in Fetching Data") ; 
                    setPage(1) ;
                    setPosts([]) ; 
                    setTotalPages(null) ; 
                }

                //--- hiding the loader ---- 
                setLoading(false) ;

        }

        //^------------------------------------
        //*-----------------------------------------
        //*-----------------------------------------

        //^---- Next and Previous button logic ---

        function handlePageChange ( page ) {

            // navigate( {search: `?page=${page}`})

            setPage(page) ; // setting the page 
            fetchBlogPosts(page) ; // calling 

        }; 


        //*-----------------------------------------
        //*-----------------------------------------



        //? -- object jsime required data he ---- 

        //^---------------------------------
        //^---------- CONTEXT --------------- 
        //^---------------------------------

            const value = {

                // -- sending the states -- 
                loading , 
                setLoading , 
                posts , 
                setPosts , 
                page  , 
                setPage , 
                totalPages ,
                setTotalPages, 

                // -- sending the function -- 
                fetchBlogPosts , 
                handlePageChange 
                
            }; 

        //^---------------------------------
        //^---------------------------------
        //^---------------------------------


//!---- STEP : 2 --------


        //*--------------------------------------------
        //*------ Returning App Context Provider ------
        //*-------------------------------------------- 

        return <AppContext.Provider value={value} >
                    {children}
                </AppContext.Provider> ; 

        //*-------------------------------------------- 
        //*-------------------------------------------- 
        //*-------------------------------------------- 





    }

//*------------------------------------------------





