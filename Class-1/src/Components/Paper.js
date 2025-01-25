import { useState } from 'react';
import pdfToText from 'react-pdftotext'





function PDFParserReact() {


    const [extract1 , setExtract1] = useState("") ; 
    const [extract2 , setExtract2] = useState("") ; 
    const [extract3 , setExtract3] = useState("") ; 
    // const [extract4 , setExtract4] = useState("") ; 
    // const [extract5 , setExtract5] = useState("") ; 

    // const [Content , setContent ] = useState("") ; 

    const combine = ` ${extract1}${extract2}${extract3}` ; 

    console.log(combine) ; 



    function extractText1(event) {
        const file = event.target.files[0]
        pdfToText(file)
            .then((text) => {
                // console.log(text) 
                setExtract1(text) 
            }
            )
            .catch(error => console.error("Failed to extract text from pdf"))

    }

    function extractText2(event) {
        const file = event.target.files[0]
        pdfToText(file)
            .then((text) => {
                // console.log(text) 
                setExtract2(text) 
            }
            )
            .catch(error => console.error("Failed to extract text from pdf"))

    }

    function extractText3(event) {
        const file = event.target.files[0]
        pdfToText(file)
            .then((text) => {
                // console.log(text) 
                setExtract3(text) 
            }
            )
            .catch(error => console.error("Failed to extract text from pdf"))

    }


    // setContent( extract1 + extract2 + extract3 + extract4 + extract5) ; 



    return (

        <div>
        <div className="App">
            <header className="App-header">
                <input type="file" accept="application/pdf" onChange={extractText1}/>
            </header>
        </div>

        <div className="App">
            <header className="App-header">
                <input type="file" accept="application/pdf" onChange={extractText2}/>
            </header>
        </div>

        <div className="App">
            <header className="App-header">
                <input type="file" accept="application/pdf" onChange={extractText3}/>
            </header>
        </div>



        {/* <p> {extract1} </p>
        <p> {extract2} </p>
        <p> {extract3} </p>
        <p> {extract4} </p>
        <p> {extract5} </p> */}

        <p> {combine} </p>



        </div>


        
    );
}
export default PDFParserReact;