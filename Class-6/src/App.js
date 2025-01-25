import React from 'react';
import reviews from './data';
import Testimonials from './component/Testimonials';
import './App.css';
import './All.css' ; 
import MockInterview from './MockInterview';

function App() {


  return (

    // <div className='outer-app'>

    //       <div className='inner-app'>
    //           <h1 className='heading'> Our Testimonials </h1>

    //           <div className='underline'>
    //                 {/* // underline  */}
    //           </div>

    //           <Testimonials reviews={reviews} />

    //       </div>

    // </div>

    <MockInterview/>


  );

}

export default App;
