import Card from "./Card";
import React from "react";

const Cards = ({courses}) => {

    let allCourses = [] ; 

    //* --- sare courses ka data ek single array me dal ke deta he --- 

    const getCourses = () => {
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach ((course) => {
                allCourses.push(course) ; 
            })
        })
        return allCourses ; 
    };

    return (
        
        <div>

{/* // ------ ternary operator applied ----------  */}

            {!courses ? (
                <div>
                    <p> No Data Found ! </p>
                </div>
            ) : (
                getCourses().map( (course) => {
                    return <Card key={course.id} course={course} />
                })
            ) }

        </div>

    )

}; 


export default Cards ; 


