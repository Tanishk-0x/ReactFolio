import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import PrivateRoute from './components/PrivateRoute';


function App() {

  //?---------------------------------------------------------------------
  //?---------------------------------------------------------------------
  //?---------------------------------------------------------------------

  //*----------------------------------------------------------------------
  //^---------------------------------------------------------------------
  
  //* -- ek variable jo ye batayega user logged in he ya nhi .. 
  //-----useState ---- 
  const [ isLoggedIn , setIsLoggedIn ] = useState(false) ; 
  
    useEffect( () => {
      setIsLoggedIn(false) ; 
      console.log("I am in the App component ! ") ; 
    })


  // fir navbar me props ke through pass kr denge ... 
  //^----------------------------------------------------------------------
  //*----------------------------------------------------------------------

  //?---------------------------------------------------------------------
  //?---------------------------------------------------------------------
  //?---------------------------------------------------------------------


  return (


    <div className="App">


      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} ></Route>
          <Route path="Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} ></Route>
          <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} ></Route>
          <Route path="/Dashboard" element={

              // <PrivateRoute isLoggedIn={isLoggedIn} >
              //       <Dashboard/>
              // </PrivateRoute>

              <Dashboard/>

            
            } > </Route>
          
      </Routes>



    </div>



  );


}

export default App;
