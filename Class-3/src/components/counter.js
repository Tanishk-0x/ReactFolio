
import { useState } from 'react';
import './counter.css'

function Counter() {


    // -------- UseState for Repaint ----------------- 
    let [counter , SetCounter] = useState(0) ; 
    //-----------------------------------------------
  
    // -------- increment handler ----------------- 
    function IncrementHandler() {
      SetCounter(counter++) ; 
    }
  
    // -------- decrement handler ----------------- 
    function DeccrementHandler() {
      SetCounter(counter--) ; 
    }
  
    // -------- reset handler ----------------- 
    function ResetHandler () {
      SetCounter(0) ; 
    }
  
  
    return (
  
      <div className='outer-div'>
  
          <div className='heading'> Increment & Decrement </div>
  
  
          <div className='inner-div'>
              <button onClick={DeccrementHandler} className='dec-btn'> - </button>
  
              <div className='screen'> {counter} </div>
  
              <button onClick={IncrementHandler} className='inc-btn'> + </button>
          </div>
  
  
          <button onClick={ResetHandler} className='reset-btn' > Reset </button>
  
      </div>
      
    );
  }
  
  export default Counter;
  