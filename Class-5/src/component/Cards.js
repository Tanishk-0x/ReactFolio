import React, { useState } from "react";
import Card from "./Card";


const Cards = (props) => {

    //^------ Accessing the Props -------
    let courses = props.courses ; 
    let category = props.category ; 
    //^------------------------------------


    //^ ---------------- UseState Hook ----------------------
    const[likedCourses , setLikedCourses] = useState([]) ; 
    //^-------------------------------------------------------


    //^ ----- sare ke sare courses ke data ko single array me dalna he -------- 
    //* -- do forEach loop lagayenge ----- 
    //? ---- ek single array aagya jisme sare ke sare course ka data he ----- 
    
    function getCourses() {
        //~ --- logic to display card according to CATEGORY ---

        if ( category === "All" ) {
                let allCourses = [] ; 
                Object.values(courses).forEach(array => {
                    array.forEach(courseData => {
                        allCourses.push(courseData) ; 
                    })
                })
                return allCourses ; 
        }

        else {
            //~ --- specific CATEGORY ka data ya array pass krenge ---
            return courses[category] ; 
        }

    }



    return (

        //^ --- jitne bhi courses he unke liye card create krenge ----

        <div className="cards-container">
            {
                getCourses().map( (course) => (
                    <Card key={course.id}
                     course={course} 
                     likedCourses = {likedCourses} 
                     setLikedCourses = {setLikedCourses} 
                    
                    />
                ))
            }
        </div>

    ); 

};


export default Cards ; 