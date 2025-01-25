

import React from "react";

const Filter = ({filterData}) => {

// * ---------- filters buttons logic ---------------- 

    return (
        <div>
            {filterData.map( (data) => {

                return (
                    <button key={data.id}>
                        {data.title}
                    </button>
                ); 

            })}
        </div>
    );


};


export default Filter ; 