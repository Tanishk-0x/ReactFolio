import { useState } from 'react';
import './App.css';
import { isVisible } from '@testing-library/user-event/dist/utils';


//*------------------ to handle single single states ---------- 
  ////------------ UseState Variable ---------------
  //// value sath sath update hoti jaa rhi he .. 

  //// const [firstName , setFirstName] = useState("") ; 

  //// const [lastName , setLastName] = useState("") ; 

  ////----------------------------------------------

  //// console.log(firstName) ; 
  //// console.log(lastName) ; 

  // //------- change Handler function --------------- 
    
  ////   function changeFirstNameHandler ( event ) {
  //     // console.log(event.target.value) ; 
  ////     setFirstName(event.target.value) ; // usestate
  ////   }


  ////   function changeLastNameHandler ( event ) {
  //     // console.log(event.target.value) ; 
  ////     setLastName(event.target.value) ; // usestate
  ////   }

//*---------------------------------------------------  



function App() {


//?-------------------------------------------------------------------------------
  //* --------- handling multiple states by creating objects -----------
    //!!------ TO Handle Multiple States --------------- 
    // single handler banane ki jrurat he --- 

    //?---------- UseState Hook ----------------------------
    const [ formData , setFormData ] = useState (
      {
        firstName : "" , 
        lastName : "" , 
        email : "" , 
        comments : "" , 
        isVisible : true , //// initially chacked 
        mode : "" , 
        favCar : "" , 
      }
    );
    //?-------------------------------------------------------

  //*--------------------------------------------------------  



    // console.log(formData.firstName) ; 
    // console.log(formData.lastName) ; 
    // console.log(formData.email) ; 
    // console.log(formData.comments) ; 

    // console.log(formData) ; 


//?------------------------------------------------------------------
  //*-----------------Change_Handler ------------------------ 

    function changeHandler ( event ) {

      ////^------ De--Structuring --------- 
      const { name , value , checked , type } = event.target

      setFormData ( prevFormData => {
        
        return {
          ...prevFormData , //^ copying purana data .. 

          //*----------------------------------------------------------
          //!----- Handling normal wali ffields ------------------ 
          // [event.target.name ] :  event.target.value //^ updating ..
          //*---------------------------------------------------------- 

          //*----------------------------------------------------------
          //!------Handling Checkbox + other fields ---- 
          [name] : type === "checkbox" ? checked : value  //^ checking for CheckBox or Normal field
          //*----------------------------------------------------------

        }

      });

    }

  //*-------------------------------------------------------
//?------------------------------------------------------------------



//?------------------------------------------------------------------
//*-----------------Submit_Handler ------------------------ 

  function submitHandler ( event ) {

    //^  stoping default behavior ..........
    event.preventDefault() ; 
    //print 
    console.log(" Finaallly Printing the Infornmation .. ") ; 

    console.log(formData) ; //^ print the data when button is clicked 

  }

//*-------------------------------------------------------
//?---------------------------------------------------------------------

//^-------------------------------------------------------------------------------------
//~-------------------------------------------------------------------------------------

  return (
    <div className="App">

      <form onSubmit={submitHandler}>  

      {/* // har input tags apni state ko maintain krte chal rhe he ..  */}


        <input type='text'
          placeholder='firstName'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName} //// saving state in input elements
        />

        
        <br/>

        <input type='text'
        placeholder='lastName'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />

        
        <br/>

        <input type='email'
        placeholder='email'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        />

        
        <br/>

        {/* ////^-------- Adding TextArea ------------ */}

        <br/>

        <textarea 
        placeholder='enter your comments here'
        onChange={changeHandler}
        name='comments'
        value={formData.comments} //// maintaining state 
        />

        {/* ////^------- Adding CheckBoxes --------------- */}

        <br/>

        <label htmlFor='isVisible' > Visible ? </label>

        <input type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}
        />

        {/* ////^------- Adding Radio_Buttons --------------- */}

        <br/>

        {/* //~ fieldset for grouping and legend for Caption  */}

        <fieldset> 
          <legend> mode </legend>

            <label htmlFor='Online-Mode'> Online Mode </label>

            <input type='radio'
            onChange={changeHandler}
            name='mode'
            value="Online-Mode"
            id='Online-Mode'
            checked = {formData.mode === "Online-Mode" }
            />

            <br/>

            <label htmlFor='Offline-Mode'> Offline Mode </label>

            <input type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline-Mode"
            id='Offline-Mode'
            checked = {formData.mode === "Offline-Mode" }
            />


        </fieldset>


      {/* ////^------- Adding Drop_Down Menu --------------- */}

      <label htmlFor='favCar'> Select Car :  </label>

        <select 

        onChange={changeHandler}
        name="favCar"
        id='favCar'
        value={formData.favCar} //// tracking states 
        >

          <option value="scorpio"> scorpio </option>
          <option value="fortuner"> fortuner </option>
          <option value="mercedes"> mercedes </option>
          <option value="buggati">  buggati </option>
          <option value="defender"> defender </option>
          <option value="endevour"> endevour </option>

        </select>


      {/* ////^------- Adding Submit_Button --------------- */}

        <br/>

        {/* <input type='submit' value='submit' /> */}

        {/* //!! ----- submit button ----- */}

        <button > Submit </button>  


      </form>



    </div>
  );
}

//^-------------------------------------------------------------------------------------
//~-------------------------------------------------------------------------------------


export default App;
