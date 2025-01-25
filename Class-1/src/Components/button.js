
import './button.css'

function DummyButton (props) {

    const content = props.Text ; 

    return (

        <div className="btn-outer">
            <button className="btn"> {content} </button>
        </div>

    ); 

}

export default DummyButton ; 