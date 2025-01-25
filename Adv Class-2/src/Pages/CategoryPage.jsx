import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React from 'react'
import Blogs from '../components/Blogs';
import Pageination from '../components/Pageination';

const CategoryPage = () => {

    //^------------useNavigate Hook-----------

    const navigation = useNavigate() ; 

    //^---------------------------------------

    //^------------useLocation Hook-----------

    const location = useLocation() ; 

    //^---------------------------------------

    const category = location.pathname.split("/").at(-1) ; 


  return (


    <div>

        <Header/>

        <div className='sec-div'>

            <button 
            onClick={() => navigation(-1) }
            > Back </button>

            <h2> 
                Blogs on <span> {category} </span>    
            </h2>

        </div>

        <Blogs/>
        <Pageination/>
      
    </div>



  )


}

export default CategoryPage
