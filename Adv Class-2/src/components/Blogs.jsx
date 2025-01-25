
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {


    //*-----------------------------------------
    //*----- consuming using UseContext Hook ----
    //*-----------------------------------------
    // loading wala data nikal liye AppContext se 

        const {posts , loading} = useContext(AppContext) ; 

    //*-----------------------------------------
    //*-----------------------------------------
    //*-----------------------------------------


  return (

    <div>

    {/* // --- checking to show Cards or Spinner ---  */}

        {
            loading 
            ?
            (<Spinner/>)
            :
             (
                posts.length === 0 ? 
                (
                    <div> No ! Post Found </div>
                )
                :


                ( posts.map( (post) => ( 


                    <BlogDetails key={post.id} post={post} />
                    

                 ) )  ) 
            ) 
        }
      
    </div>


  )


}

export default Blogs
