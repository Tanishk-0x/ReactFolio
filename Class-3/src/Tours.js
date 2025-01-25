
import Card from "./PlanComponents/Card";

function Tours ({tours , removeTour }) {

    return (

        // ------ outer div ---------------- 
        <div className="container"> 

        {/* // ----------- heading ---------------  */}
            <div className="title">
                <h2> Plan With Cars 🎭</h2>
            </div>

        {/* // ----------- div where cards is render ------------  */}
            <div className="cards">

        {/* // {...tour} = pri ki puri copy pass kr rhe he object ki  */}

                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour = {removeTour}></Card>
                    })
                }
            </div>

        </div>

    ); 

}


export default Tours ; 