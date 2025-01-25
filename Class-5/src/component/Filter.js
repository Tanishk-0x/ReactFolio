import React from "react";


const Filter = (props) => {

    //^ ------- Accessing the Props -------
    let filterData = props.filterData ; 
    let category = props.category ; 
    let setCategory = props.setCategory ; 
    //^---------------------------------------



    //^--------------- Filter Handler -----------------
    function FilterHandler (title) {
        //* --- logic for filtering acoording to category --- 
        setCategory(title) ;
    }
    //^-------------------------------------------------


    //^ ---------------------------------------------------
    return (

        <div className="filter">

            {/* //~ --- Fetching innerText of Buttons through API --- */}
            {
            filterData.map( (data)=> (
                    <button key={data.id} 
                        onClick={ () => FilterHandler(data.title) }> 
                        {data.title} 
                    </button>
            ))
            }

        </div>

    ); 

};


export default Filter ; 