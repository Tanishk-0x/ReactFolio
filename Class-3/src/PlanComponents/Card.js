import { useState } from "react";



function Card ({ id , image , info , name , price , removeTour }) {

    // ------ useState to handle read more / show less ------------ 
    const[readmore , SetReadmore] = useState(false) ; 
    //-------------------------------------------------------------

    //----------- substring to show only 200 words at default --------
    const description = readmore ? info : `${info.substring(0,200)}....` ; 


    // ----readmore Handler ------ 
    function readmoreHandler () {
        SetReadmore(!readmore) ; 
    }


    return (

        // ------ A single Card Contents ----------- 
        <div className="card">

                <img src={image} className="image"></img>

                <div className="tour-info">
                    <div className="tour-details">
                        <h4 className="tour-price"> {price}</h4>
                        <h4 className="tour-name">{name}</h4>
                    </div>

                    <div className="description">
                        {description} 
                        <span className="read-more" onClick={readmoreHandler}> {readmore ? 'show less' : 'read more' } </span>
                    </div>
                </div>

                {/* // -------- button to remove card ----------  */}
                <button className="btn-red" onClick={() => {
                    removeTour(id) 
                }}> Not Intrested </button>

        </div>

    );  

}


export default Card ; 