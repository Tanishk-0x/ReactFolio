
import React from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {

    //^ ----------- Acccessing the Props ----------
    let course = props.course ; 

    let likedCourses = props.likedCourses ; 
    let setLikedCourses = props.setLikedCourses ; 
    //^----------------------------------------------


    //^------------------------------------------------------
    //~ ---------- toast show krne ka logic ---------------- 

    function clickHandler() {
        // ^ -- logic ---- 
        if ( likedCourses.includes(course.id)) {
            // pehle se like hua pada he .. 
            setLikedCourses( (prev) => prev.filter((cid) => cid !== course.id) );
            toast.warning("Removed from liked") ; //*TOAST

        }

        else {
            // phle se like nhi he .. 
            // insert krna he ye course ko liked course me .. 
            if ( likedCourses.length === 0 ) {
                setLikedCourses( [course.id] ) ; 
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]) ; 
            }
            toast.success("Added to liked") ; //* TOAST
        }
    }

    //~ -----------------------------------------------------------
    //^-------------------------------------------------------------


    return (

        //^ ---- SINGLE CARD -------- 

        <div className="single-card">

                <div className="img-div">
                        <img src={course.image.url}/>
                </div>

                <div className="heart-btn">
                        <button onClick={clickHandler}>
                            {
                                likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.5rem" />
                                ) : (<FcLike fontSize="1.5rem" />)
                            }
                        </button>
                </div>

                <div className="des">
                    <p className="title"> {course.title} </p>
                    <p className="description"> 
                        {
                            course.description.length > 150 ? (course.description.substr(0,150)) : (course.description) + "..." 
                        }
                    </p>
                </div>

        </div>

    ); 


}; 


export default Card ; 