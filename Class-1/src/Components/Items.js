// ----------- linking css ---- 
import './Item.css'

// ------- CREATING COMPONENT -------

function Item (props) {
    
    const itemName = props.name ; 

    return (
            
        <div>
            <p className="Nirma"> {itemName} </p>
            {props.children} 
        </div>


    )

}


// --- export component ----- 
export default Item ; 