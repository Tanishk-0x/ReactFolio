import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Filter from './component/Filter';
import Cards from './component/Cards';
import Spinner from './component/Spinner';
import { apiUrl , filterData } from './data';
import { toast } from 'react-toastify';

import './App.css';
import './All.css'



const App = () => {

  //?------------ Courses variable UseState ---------------- 
  const[courses , setCourses] = useState(null) ; 
  //?---------------------------------------------


  //?------------ loading spinner UseState ---------------- 
  const[loading , setLoading] = useState(true) ; 
  //?---------------------------------------------

  //?------------ Category Logic UseState ---------------- 
  const[category , setCategory] = useState(filterData[0].title) ; 
  //?---------------------------------------------


  //^ ---------------- fetching Api --------------------- 
  async function fetchData() {

    setLoading(true) ; // loading spinner

      try {

        let response = await fetch(apiUrl) ; 
        let output = await response.json() ; 
        //^ ---- output -----
        setCourses(output.data) ; 
        
      }

      catch(error) {
        toast.error("Something Went's Wrong In It !")
      }

      setLoading(false) ; // loading spinner 

  }

  //^ -----------------------------------------------------
  


  //^ ---------------- useEffect Hook--------------------- 

    useEffect ( () => {

        fetchData() ; //* calling the function

    }, [] ) ; 

  //^------------------------------------------------------  


  //~ ---------------- MAIN UI -------------------------   

  return (

    <div className='outer-app'>

          <div>
            <Navbar/>
          </div>

          <div>
            <Filter filterData={filterData}
            category = {category}
            setCategory = {setCategory}
            />
          </div>

          <div className='inner-app'>
            {
              loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />) 
            }
          </div>

    </div>


  );
}; 



export default App;
