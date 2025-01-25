import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/" ; 


    //? ------------ useContext Hook ------------ 
    // getting data from APP_CONTEXT 
    const {setLoading , loading } = useContext(AppContext) ; 


    //^------------- useState Hook ----------- 

    const [ blog , setBlog ] = useState(null) ; 

    const [ relatedblogs , setRelatedBlogs ] = useState([]) ; 

    //^----------------------------------------


    //^------------- useLocation Hook ---------

    const location = useLocation() ; 

    //^----------------------------------------


    //^------------useNavigate Hook-----------

        const navigation = useNavigate() ; 

    //^---------------------------------------


    const blogId = location.pathname.split("/").at(-1) ; 



    async function  fetchRelatedBlogs () {
        
        setLoading(true) ; // showing the loader 

        let url = `${newBaseUrl}/get-blog?blogId=${blogId}`

        try{
            const res = await fetch(url) ; 
            const data = await res.json() ; 

            //--------- Setting data -------- 
            setBlog(data.blog) ; 
            setRelatedBlogs(data.relatedBlogs) ; 
        }

        catch(error) {
            console.log("Error aagya in blog id wali call ... ")
        }

        setLoading(false) ; // hide the loader 

    }



    useEffect( () => {

        if ( blogId ) {
            fetchRelatedBlogs() ; 
        }

    }, [location.pathname])


  return (


    <div>

        <Header/>

        <button 
        onClick={ () => navigation(-1) }
        >Back</button>


        {
            loading ? 

            (<div> 
                <p> Loading ... </p>
            </div>) : 

            blog ? 
            (
                <div> 
                    <BlogDetails post={blog} />  
                    <h2> Related Blogs </h2>   

                    {
                        relatedblogs.map( (post) => (
                            <div key = {post.id} >
                                <BlogDetails post={post} /> 
                            </div>
                        ))
                    }

                </div>
            ) : 

            (
                <div>
                    <p> No Blog Found </p>
                </div>
            )
                
        }
      
    </div>


  )


}

export default BlogPage
