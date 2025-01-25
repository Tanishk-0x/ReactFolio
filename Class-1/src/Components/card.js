
// custom tag ka inner content by default hide rehta he 
// usko visible krane ke liye {props.children} ka use krte he .. 

function Card (props) {

    return (
        <div>
            {props.children} 
        </div>
    )

}


export default Card ; 