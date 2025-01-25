
### React_Router 

### React Rounter => esa framewrok he jisko use krke WE CAN NAVIGATE BETWEEN MULTIPLE PAGES WITHOUT REFRESHING THE PAGE 

* move from one page to another
* page reload nhi hone deta he 
* dynamically changes bina page reload ke 
* navigate without refreshing the page 

<!-- npm install react-router-dom -->
<!-- <BrowserRouter> -->

//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------


### Browser_Router_Tag

// BrowserRouter :  
<BrowserRouter> 
<!--*  Routes (path) ko link krta he Browser ke sath  -->
<BrowserRouter/> 


// Path : 
<!-- ~ Path = har page tak pahuchne ka ek rasta hoga usko path kehte he  -->

// <Routes>
= path create krne ke liye <Routes> tag ka use krenge 


<Routes>
    <Route> <Route/>
<Routes/>


//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

### Syntax --- 

 <!--* matlab agar path == " / " he to { element } wali chij ko render kr do ..   -->

<!-- //^--------------------------------------------- -->
   <Route  path="/" element={ <Home/> }  ></Route>
<!-- //^--------------------------------------------- -->


 <!-- ~---- Handling if path does not mathched ---- -->
<!-- //^--------------------------------------------- -->
   <Route  path="*" element={ <NotFound/> }  ></Route>
<!-- //^--------------------------------------------- -->

<!--~ path = " * " -->
 <!-- => matlab jitne bhi paths de rakhe he unko chhodke koi bhi path dalenge ..  -->

//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

 ### Replacement _ OF - Anchor Tag in React

    <li>
        <!-- ^ < Link to="/" > _HOME_  </Link> -->
    </li>

//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

### useNavigate Hook ... 

=> different different Routes par navigate krne ke liye use hota he 

    // syntax .. 
    <!--! const name = useNavigate() ;  -->

    // calling .. 
    <!--! name ( " /path " ) ;  --> 
    

  <!-- //?-------------------------------------- -->
  <!-- //*--------UseNavigate Hook ---------- -->
  <!-- //?---------------------------------------- -->

  <!-- //~--------------------------------------- -->
      const navigate = useNavigate() ; 
  <!-- //~--------------------------------------- -->

      function clickHandler ( ) {
          <!-- //? moving to About page through useNavigate hook -->
        <!-- //^-- using useNavigate hook ...  -->
        navigate("/About") ; // moving 

      }

    <!-- //* back jane ke liye ...  -->
      Back = navigate( -1 ) ; 

//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
