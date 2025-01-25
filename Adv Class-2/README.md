<!-- //*-------------------------------------------- -->
<!-- //*-------------------------------------------- -->
<!-- //*-------------------------------------------- -->
<!-- //*-------------------------------------------- -->

### PROP_DRILLING

<!--! prop-drilling = ek component se uske chikdren ko data send kre jaa rhe he  -->
<!--* parent to children  -->

comp1(data)     comp2    comp3      comp4      comp5 

<!--~ comp1 se comp5 me directly data send krna bhaout hactic difficult ho jata he hume pehle comp2 ko send krna padega fir comp3 ko send krna padega fir comp4 ko send krna padega fir jaake wo data comp5 tak pahuchega ___ to comp2 , comp3 , comp4 ko to bina matlab ke hi data send  unko to jaruruat hi nhi thi to usko prevent krne ke liye CONTEXT_API ka use krte he  -->

<!-- //*-------------------------------------------- -->
<!-- //*-------------------------------------------- -->
<!-- //*----------------------------------------- -->
<!-- //*------------------------------------------ -->


### CONTEXT_API 

<!-- !The Context API in React is a built-in feature that allows you to share data and functionality across components in your app, regardless of their location in the component tree -->

                          |--------|
 App.js ----> context --->|  DATA  |
                          |--------| 

                APP.js
                   |
    _______________|_______________            
    |       |      |       |       |   
  comp1   comp2   comp3   comp4   comp5


* App.js ke multiple components he 
* APP.js ke data ko uske childrens ko send krna he to 
* Uske liye ek CONTEXT create kr lenege jisme DATA hoga 
* Us CONTEXT ko uske sare ke sare childrens Access kr sakte he 
*  { centralised data } 


<!--? RULES of context Api  -->
1 . create a context api 
2 . providing context = context ko provide krna padega 
3 . comsume the context 


<!-- //!---STEP : 1 ------- -->
// CREATE : 

  <!-- //*----------------------------------------- -->
  <!-- //*----------------------------------------- -->

        export  const AppContext = createContext() ;

  <!-- //*----------------------------------------- -->
  <!-- //*----------------------------------------- -->

    <!-- //^--------------------------------- -->
    <!-- //^---------- CONTEXT ---------------  -->
    <!-- //^--------------------------------- -->

            const value = {

                // -- sending the states -- 
                loading , 
                setLoading , 
                posts , 
                setPosts , 
                page  , 
                setPage , 
                totalPages ,
                setTotalPages, 

                // -- sending the function -- 
                fetchBlogPosts , 
                handlePageChange 
                
            }; 

    <!-- //^--------------------------------- -->
    <!-- //^--------------------------------- -->
    <!-- //^--------------------------------- -->


<!-- //!---STEP : 2 ------- -->
PROVIDING CONTEXT : 


    <!-- //*---------------------------------------- -->
    <!-- //*---- Returning App Context Provider -- -->
    <!-- //*------------------------------------ -->
    <!--? iska matlab <children> ko ye {Value} dedo jo <AppContext> me he  -->

        return <AppContext.Provider value={value} >
                    {children}
                </AppContext.Provider> ; 

    <!-- //*------------------------------------- -->
    <!-- //*------------------------------------- -->
    <!-- //*------------------------------------- -->

<!-- //!---STEP : 3 ------- -->
CONSUMING : 

    <!-- //*------------------------------------ -->
    <!-- //*--- consuming using UseContext Hook ---->
    <!-- //*------------------------------------ -->
    <!-- //~ loading wala data nikal liye AppContext se  -->

        const {posts , loading} = useContext(AppContext) ; 

    <!-- //*------------------------------------- -->
    <!-- //*------------------------------------- -->
    <!-- //*------------------------------------- -->




<!-- //*-------------------------------------------- -->
<!-- //*-------------------------------------------- -->
<!-- //*----------------------------------------- -->
<!-- //*------------------------------------------ -->


### USE_CONTEXT HOOK 

* for Consuming the context ... 

<!--! useContext Hook = a tool that allows components to access and share state without passing props manually through multiple levels of the component tree -->

<!--^ Context block se data ko Access krne ke kaam aata he  -->

  <!--* const {loading} = useContext(AppContext) ; -->

const { jo nikalna he } = useContext( context ka naam )

<!-- //*------------------------------------------- -->
<!-- //*------------------------------------------ -->
<!-- //*----------------------------------------- -->
<!-- //*------------------------------------------ -->

### useSearchParameter Hook 

<!--! The useSearchParams hook is used to read and modify the query string in the URL for the current location. -->

  <!--* const [ searchParams , setSearchParams ] = useSearchParams() ;  -->


<!--^ url ke andar se agar koi bhi search parameter ko Access krna he ya Update krna he to UseSearchParams() Hook ka use krte he  -->

* ye do paramaters leta he .. 
1 . variable 
2 . function to set the value 

* ye output me jo chije deta he .. 
1 . search parameter ka object 
2 . set serach parameter ka function 




<!-- //*------------------------------------------- -->
<!-- //*------------------------------------------ -->
<!-- //*----------------------------------------- -->
<!-- //*------------------------------------------ -->

### useLocation Hook 

<!--! The `useLocation` hook is used to return the current location of a react component. -->

<!--^ Current Location ko Access krne ke kaam aata he .. kis location pe khade he  -->

<!--* const location = useLocation() ;  -->