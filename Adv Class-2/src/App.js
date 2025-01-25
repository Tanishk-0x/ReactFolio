import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pageination from './components/Pageination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route , Routes, useLocation, useSearchParams } from 'react-router-dom';
import BlogPage from './Pages/BlogPage';
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
import TagPage from './Pages/tagPage';

function App() {


  //-----  consuming ---- through useContext hook --- 
  const {fetchBlogPosts} = useContext(AppContext) ; 


  //*----------------------------------------------
  //*-------------UseSearchParams() Hook ---------
  //-> url ke andar search parameter ko update ya access krne ke liye 
  //*----------------------------------------------

  const [ searchParams , setSearchParams ] = useSearchParams() ; 

  //*----------------------------------------------
  //*----------------------------------------------


  //*----------------------------------------------
  //*-------------UseLocation() Hook ---------
  //-> Current Location jannne ke liye .. 
  //*----------------------------------------------

  const location = useLocation() ; 

  //*----------------------------------------------
  //*----------------------------------------------

  // ----- useEffectt Hook ---- 
  // when pathName is change jab chalayenge  .... 

  useEffect ( () => {

    const page = searchParams.get("path") ?? 1 ; 

    //* ----- Finding tags's Value ---------- 
    if ( location.pathname.includes("tags") ) {
      // iska matlab tag wala page show krna he 
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ") ;
      fetchBlogPosts( Number(page) , tag ) ; // call with tags 

    }

    //* ---- Finding Categories's Value -------- 
    else if ( location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " " ) ; 
      fetchBlogPosts( Number(page) , null , category ) ; // call with category 
    }

    else {
      fetchBlogPosts( Number(page) ) ; // normal call 
    }
    

  },[location.pathname, location.search ]) ; 




  return (





  //*--------------------------------------------------
  //*------------------- Creating Routes --------------
  //*--------------------------------------------------
    // path = 'blog/:DYNAMIC_ID / parameter'

    <div>
    <Routes>

        <Route path='/' element={ <Home/> } />

        <Route path='/blog/:blogId' element={ <BlogPage/> } />

        <Route path='/tags/:tag' element={ <TagPage/> } />

        <Route path='/categories/:category' element={ <CategoryPage/> } ></Route>



    </Routes>

    </div>

  //*--------------------------------------------------
  //*--------------------------------------------------




  );


}

export default App;
