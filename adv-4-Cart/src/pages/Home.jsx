import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products" ; 


    const [loading , setLoading] = useState(false) ; 

    const [posts , setPosts] = useState([]) ; 

    //*--------------- API CALLING ----------------- 

    async function fetchProductData() {
      setLoading(true) ; 

      try {
        const res = await fetch(API_URL) ; 
        const data = await res.json() ; 

        setPosts(data) ; 
      }

      catch (error) {
        console.log("error aagay he") ; 
        setPosts([]) ; 
      }

      setLoading(false) ; 

    }

    //* --------------------------------------------------

    // --------- useEffect hook for api calling ----------- 
    // only at first render .. 

    useEffect(  () => {
        fetchProductData() 
    },[]) ; 





  return (

      <div>

          {
            loading ? <Spinner/> : 
            posts.length > 0 ?
            
            // render product using map function 

            (<div>

                {
                  posts.map( (post) => {
                    <Product key={posts.id} post={post} />
                  })
                }

            </div>) : 

            <div>
              <p> No Data Found ! </p>
            </div>
          }

      </div>

  ); 
}

export default Home
