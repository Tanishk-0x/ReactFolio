
import './App.css';
import { useState } from 'react';
import Tours from './Tours';
import data from './PlanComponents/data';
import Card from './PlanComponents/Card';



const App = () => {

  //---------------------- useState ------------------------ 
  const [tours , setTours] = useState(data) ; 
  //---------------------------------------------------------


  //---------------- code for filter ---------------------------
  // ----- id se base pe filter ke lenge -----
    function removeTour ( id ) {
          const newTours = tours.filter( tour => tour.id != id ) ;
          setTours(newTours) ; 
    }

  //-------------------------------------------------------------  

  // ----- code to refresh when all card is deleted ------------- 

  if ( tours.length === 0 ) {
    return (
        <div className ="refresh"> 
          <h2> No Cars Left </h2>
          <button className="btn-white" onClick = {() => {
            setTours(data)
          }}
          > Refresh </button>
        </div>
    ); 
  }

  //---------------------------------------------------------------

  // ------------------------- main content ------------------------ 
    return (

      <div className="App"> 

        <Tours tours={tours} removeTour = {removeTour}></Tours>

      </div>

    ); 

  //-------------------------------------------------------------------

}

export default App;


