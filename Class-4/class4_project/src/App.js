
import React, { useEffect, useState } from 'react';
import {apiUrl,filterData} from "./data" ; 
import Navbar from './Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import './App.css';
import { toast } from 'react-toastify';



const App = () =>  {


  // saving data --- 
  const[courses , setCourses] = useState(null) ; 
  

  //* ------ calling Api calll using useEffect Hook ----------

  useEffect ( () => {

    //* --------------  calling Api Section ---------- 
    const fetchData = async() => {
      try {
        const res = await fetch(apiUrl) ; 
        const output = await res.json() ; 
        // save data into the variable 
        // ?---- Using useState ----
        setCourses(output.data) ;   

      }
      catch(error) {
        toast.error("something wents wrong .. ! ")
      }
    }

    fetchData() ; // calling the function ..

  }, [] ) ; 

    return ( 

    // ---- outer div ----
      <div>

            <Navbar/> 

            <Filter filterData = {filterData} />

            <Cards courses={courses} /> 

      </div>


    ) ; 

} ; 


export default App;
