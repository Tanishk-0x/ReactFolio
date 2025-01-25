import { FaQuoteLeft , FaQuoteRight , FaGem } from "react-icons/fa";
import React from "react";

const Card = (props) => {

    // ^ ---- Accessing the Props ------ 
    let review = props.review ; 


    return (

        <div className="outer-card">
                
                
                <div className="img-div">
                    <img src={review.image} className="image" />

                    <div className="back"></div>

                </div>


                <div className="name">
                    <p> {review.name} </p>
                </div>
                

                <div className="jobs">
                    <p className="jobing"> {review.job} </p>
                </div>

                <div className="left">
                    <FaQuoteLeft/>
                </div>

                <div className="text">
                    {review.text} 
                </div>

                <div className="right">
                    <FaQuoteRight/>
                </div>


        </div>

    ) ; 
}; 


export default Card ; 