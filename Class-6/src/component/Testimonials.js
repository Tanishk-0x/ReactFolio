import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./Card";
import React, { useState } from "react";
import '../All.css'

const Testimonials = (props) => {

    //^ --------- Accessing the props -------
    let reviews = props.reviews ; 
    //^----------------------------------------

    //^ ------------ UseState Hook ------------
    const[index , setIndex] = useState(0) ; 
    //^---------------------------------------

//?---------------------------------------------------

  //^ ------------ Click Handlers --------------   

    function LeftShiftHandler () {
        //* --- LOGIC ----
        if (index -1 < 0 ) {
            setIndex( reviews.length - 1 ) ; 
        }
        else {
            setIndex( index - 1 ) ; 
        }
    }

    //?-------------------------------------------------

    function RightShiftHandler () {
        //* --- LOGIC ----
        if ( index + 1 >= reviews.length ) {
            setIndex(0) ; 
        }
        else {
            setIndex(index + 1) ; 
        }
    }

    //?---------------------------------------------------

    function SurpriseHandler () {
        //* --- Generate Random ---
        let randomIndex = Math.floor(Math.random() * reviews.length) ; 
        setIndex(randomIndex) ; 
    }

    //?----------------------------------------------------


    return (

        <div className="test.out">

        {/*//^ ---- DISPLAYING DATA OF INDEX ----- */}

            <Card review = {reviews[index]} ></Card>

        {/*//^ ------------------------------------ */}


        {/* //^ --- buttons for Left and Right Shift --- */}
            <div className="arrow">

                    <button onClick={LeftShiftHandler}>
                         <FiChevronLeft/> 
                    </button>


                    <button onClick={RightShiftHandler}>
                         <FiChevronRight/> 
                    </button>

            </div>

        {/* //^ ------- button for Random Generator -------- */}
            <div className="random">
                <button onClick={SurpriseHandler}> Surprise Me </button>
            </div>

        </div>

    ); 

}; 


export default Testimonials ; 