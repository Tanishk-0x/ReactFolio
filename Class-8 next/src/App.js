import './App.css';
import { Link, NavLink, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Support from './components/Support';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import LAbs from './components/LAbs';


function App() {



  return (


    <div className="App">

{/* //?----------------------------------------------------------------------------------
//?------------------------ NAV-LINKS SECTION --------------------------------------------------
//?---------------------------------------------------------------------------------- */}

        <nav className='nav'>
            <ul>

            {/* //^ - Replacement of Anchor Tag = <Link/> -- */}
              <li>
                  <NavLink to="/" > Home </NavLink>
              </li>

              <li>
                  <NavLink to="/About" > About </NavLink>
              </li>

              <li>
                  <NavLink to="/Support" > Support </NavLink>
              </li>

              <li>
                  <NavLink to="/Labs" > Labs </NavLink>
              </li>

            </ul>
        </nav>

{/* //?----------------------------------------------------------------------------------
//?-------------------------- ROUTES SECTION -------------------------------------------------
//?---------------------------------------------------------------------------------- */}

    <Routes>

        {/* //! -- matlab agar path == " / " he to { element } wali chij ko render kr do ..  */}

          {/* <Route  path="/" element={<div> Home Page </div>}  ></Route>
          <Route  path="/support" element={<div> Support Page </div>}  ></Route>
          <Route  path="/about" element={<div> About Page </div>}  ></Route>
          <Route  path="/labs" element={<div> Labs Page </div>}  ></Route> */}

        {/* //!!----- rendering Components instead of div -----  */}

         {/* ////^-------------------SYNTAX ------------------------ -->
              <Route  path="/" element={ <Home/> }  ></Route>
         ////^--------------------------------------------- --> */}


          <Route  path="/" element={ <Home/> }  ></Route>
          <Route  path="/Support" element={ <Support/> }  ></Route>
          <Route  path="/About" element={ <About/> }  ></Route>
          <Route path='/LAbs' element={ <LAbs/> } ></Route>


        // ^ ----- Handling if path does not mathched ----- 
          <Route  path="*" element={ <NotFound/> }  ></Route>


    </Routes>

{/* //?----------------------------------------------------------------------------------
//?----------------------------------------------------------------------------------
//?---------------------------------------------------------------------------------- */}

    </div>


  );

}



export default App;
