
# --------------- Event Handling in react --------------------

// react event handlinig PROPS ke through hi krta he 
// `On____= { functionName_to_calll } `; 
// OnClick = {functionName} ; 
// OnChange = {functionName} ; 

# --------------- {useState} in react --------------------

# State = ` agar project me koi esa data he jisko change krna chahte ho aur UI per bhi reflected krna he to State ka use krta he ` 

# State = repaint ya updation ke kaam aata he .. `new value dalne per UI ko fir se render ya updatation krta he `

 # UseState() = ek hook he hook matlab utility function

 import {useState} ; 

 const [variable ki value , value ko update krne ke liye function ] ; 

 const [ __ , __ ] = useState (`variable ko initialise kis value se krna he `) ; 

 useState Hook = do chije output return krta he .. 
    1 . value of the variable .. 
    2 . a function for updation .. // Setter_function

-------------------- useState() -------------------------
# const [title, setTitle] = useState( to_initialised ) ; 
    setTitle("_value_to_set_") // value ko set krne ke kaam aata he ... 
---------------------------------------------------------

# ---------- to handle multiple State ----------- 
<!-- `----- Syntax ---- ` -->
<!-- // object banake daal denge --  -->
    const [ Products , SetProducts] = useState ( {
        title : ' __ ' , 
        date : ' __ ' , 
        price : ' __ ' 
    }); 


# --------- Child to Parent Communication ------------ 

 how child communicate with parents = `props_function` ;     

1 . parent function pass krega (props->function)
2 . child function call kraga input parameter ke sath 
3 . access ho jayega 
