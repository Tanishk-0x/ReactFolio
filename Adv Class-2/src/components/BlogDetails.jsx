
import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ( {post} ) => {


  return (


    <div className='card'>

        <NavLink to={`/blog/${post.id}`}>
            <span className='title'> {post.title} </span>
        </NavLink>

        

        <p>
            By 
            <span> {post.author} </span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" " , "-" )}`}>
                <span> {post.categor} </span>
            </NavLink>
        </p>



        <p> Posted on {post.date}</p>

        <p> {post.content} </p>



        <div>
            {
                post.tags.map( (tag , index ) => (

                    <NavLink key={index} to={`/tags/${tag.replaceAll(" " , "-")}` }>
                        <span className='span'> {`#${tag}`} </span>
                    </NavLink>

                ) )
            }
        </div>
      
    </div>



  )


}

export default BlogDetails
