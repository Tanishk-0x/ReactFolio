import { useEffect, useState } from 'react';
import './App.css';


// -------- app = component -------- 

function App() {

  // -------------- useState ------------------- 
    const [text , setText ] = useState('') ; 
  //---------------------------------------------
    
  
  // ! --------------------- useEffect Hook ----------------------------

  // * --- variation : 1 -- (every render percha chalega) ---
    /*
      useEffect ( () => {
          console.log(" UI RENDERING DONE .{variation : 1} ... ") ; 
      }); 
    */  


  // * --- variation : 2 -- (only first render per chalega) ---
  /*
      useEffect ( () => {
          console.log("UI RENDERING DONE .{variation : 2 } ... ") ; 
      }, [] );
  */  

 
  // * --- variation : 3 -- (On first render and aur dependency change hogi jab hi chalega) ---
  // --- jab hi chalega jab TEXT ki value change hogi --- 
  /*
      useEffect ( () => {
          console.log(" change observer . {variation : 3} ... ") ; 
      }, [text] ); 
  */  

  // * --- variation : 4 -- (to handle unmounting of a component) --- 
  // --- naya listner lagane se pehle purana listener remove kro --- 
  // ? -- Unmounting = jo component render ho chuka he / UI per aa chuka he 

      useEffect ( () => {
        // -- add event listner -- 

          console.log(" Listner Added .. ") ; // fir Ye run hoga .. 

        return () => {
          console.log("Listner Removed .. ") ; // pehle Ye run hoga .. 
        }

      }, [text] ); 

  //---------------------------------------------



  // ------------- event Handler ----------------
    function changeHandler (event) {
        console.log(text) ; 
        setText(event.target.value) ;  
    }
  //---------------------------------------------



    return (
      <div className="App">

          <input type='text' className='input-field' onChange={changeHandler}></input>

      </div>
    );

}

export default App;
