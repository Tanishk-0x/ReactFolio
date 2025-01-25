import { useLocation, useNavigation } from "react-router-dom"
import Pageination from "../components/Pageination";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import { useNavigate } from "react-router-dom";

const TagPage = () => {

    const navigation = useNavigate() ; 
    const location = useLocation() ; 
    const tag = location.pathname.split("/").at(-1) ; 

    return (

        <div className="App">
            <Header/>

            <div className="sec-div">
                <button onClick={() => navigation(-1)}>
                    back
                </button>

                <h2>
                    Blogs Tagged <span> #{tag} </span>
                </h2>
            </div>

            <Blogs/>
            <Pageination/>

        </div>
    )

}

export default  TagPage 