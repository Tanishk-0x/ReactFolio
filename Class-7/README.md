
### React Forms --> 

<!-- //! React Froms = me accumulate (ikatthaa) krne ki jrurat nhi hoti he ..  -->
<!-- react forms = functionality hoti he sari states ko save kr sakte he hooks (useState) ki madad se ...  -->
<!-- multipple states handle krne ke liye object ka use krenge  -->

<!-- //!------ to Handle Multiple States -------->


### Handle Single States 
<!-- //?------------------------------------------------------------------------------- -->
<!-- //*------------------ to handle single single states ----------  -->
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

<!-- //*---------------------------------------------------   -->
<!-- //?------------------------------------------------------------------------------- -->


### Handle Multipple States 
<!-- //^---------------------------------------------------------------------------------------------- -->

<!-- //* multiple states ko handle krne ke liye OBJECT banate he  -->

<!--//? const [ formData , SetFormData ] = useState ( 
    {
        firstName : "value" , 
        LastName : "value: , 
        email : "value" , 
    }
); -->

### Main code for inserting the new Data 

<!-- //*--------- FormData ke andar Naya Data dalne ke liye --------  -->

    <!-- ~ ...prevFormData = isse purane Data ko Copy kr rhe he  -->

    function changeHandler ( event ) {

      <!--//^------ De--Structuring ---------  -->
      const { name , value , checked , type } = event.target

      setFormData ( prevFormData => {
        
        return {
          ...prevFormData , //^ copying purana data .. 

          <!-- //*---------------------------------------------------------- -->
          <!-- //!----- Handling normal wali ffields ------------------  -->
          // [event.target.name ] :  event.target.value //^ updating ..
          <!-- //*----------------------------------------------------------  -->

          <!-- //*---------------------------------------------------------- -->
          <!-- //!------Handling Checkbox + other fields ----  -->
          [name] : type === "checkbox" ? checked : value  //^ checking for CheckBox or Normal field
          <!-- //*---------------------------------------------------------- -->

        }

      });

    }

### Submit the Forms (logic) 

<!-- //*------------------------------------------------------------------ -->
<!-- //*-----------------Submit_Handler ------------------------  -->

  function submitHandler ( event ) {

    //^  stoping default behavior ..........
    event.preventDefault() ; 
    //print 
    console.log(" Finaallly Printing the Infornmation .. ") ; 

    console.log(formData) ; //^ print the data when button is clicked 

  }

<!-- //*------------------------------------------------------- -->
<!-- //?--------------------------------------------------------------------- -->
