
import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pageination from '../components/Pageination'

const Home = () => {

  return (


    <div>

        <div className="App">

        <Header />

        <div className='blogs-div'>
            <Blogs />
        </div>

        <Pageination />

        </div>
      
    </div>


  )

}

export default Home
