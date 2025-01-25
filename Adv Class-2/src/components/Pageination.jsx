import React from 'react'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';


const Pageination = () => {

    //*-----------------------------------------
    //*----- consuming using UseContext Hook ----
    //*-----------------------------------------

    const {page , handlePageChange , totalPages} = useContext(AppContext) ; 

    //*-----------------------------------------
    //*-----------------------------------------
    //*-----------------------------------------




  return (

    <div className='page-bottom'>

    {/* // buttons show and hide according to the condition  */}

        <div className='nex-pre-btn'>

            { page > 1 && 
                (<button onClick={ () => handlePageChange( page - 1 ) }>
                    Previous
                </button>)
            }

            {page < totalPages && 
                (<button onClick={ () => handlePageChange( page + 1 ) }>
                    Next
                </button>)
            }



        </div>

        <p> Page {page} of {totalPages} </p>

      
    </div>

  )

}


export default Pageination
