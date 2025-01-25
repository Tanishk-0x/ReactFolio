import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './App.css';
import './form.css'



function App() {

  //*--------------- useState Hook ------------------------------

      const [ formData , setFormData ] = useState(
          {
              firstName : "" , 
              lastName : "" , 
              email : "" , 
              country : "India" , 
              streetAddress : "" , 
              city : "" , 
              state : "" , 
              postalCode : "" , 
              comments : false , 
              candidates : false , 
              offers : false , 
              pushNotification : "" , 

          }
      )

  //*-----------------------------------------------------------

  //?---------------Change Handler-----------------------------------

      function changeHandler ( event ) {


        ////^---- De-structuring ------- 
        const { name , value , checked , type } = event.target

        ////^----- MAIN LOGIC ------
        setFormData ( (prev) => ({
          ...prev , //*-- copying old ---- 
          [name] : type === "checkbox" ? checked : value 
        })); 
        

      }

    //?----------------------------------------------------
      

      function submitHandler ( event ) {

          //^ --- preventing default ----
          event.preventDefault() ; 
          //^ --printing ----- 
          console.log(" Finally Printing The Data .. ")
          console.log(formData) ; 

      }

  //?---------------------------------------------------------

      function ToastHandler () {
        toast.warning("submitted") ; 
      }

  //?----------------------------------------------------------

  return (


        <div className="App">

        <form onSubmit={submitHandler}>

          <label htmlFor='firstName'> First Name :  </label>
          <br/>
          <input type='text'
          placeholder='Enter first name'
          name='firstName'
          id='firstName'
          value={formData.firstName}
          onChange={changeHandler}
          />

          <br/>

          <label htmlFor='lastName'> Last Name :  </label>
          <br/>
          <input type='text'
          placeholder='Enter last name'
          name='lastName'
          id='lastName'
          value={formData.lastName}
          onChange={changeHandler}
          />


          <br/>

          <label htmlFor='email'> Email Address :  </label>
          <br/>
          <input type='text'
          placeholder='Enter email'
          name='email'
          id='email'
          value={formData.email}
          onChange={changeHandler}
          />

          <br/>


          <label htmlFor='country'> Country </label>
          <br/>

          <select
          id='country'
          name='country'
          value={formData.country}
          onChange={changeHandler}
          >
              <option > India </option>
              <option > London </option>
              <option > Australia </option>
              <option > Melbourne </option>
          </select>


          <br/>

          <label htmlFor='streetAddress'> Street Address :  </label>
          <br/>
          <input type='text'
          placeholder='streetAddress'
          name='streetAddress'
          id='streetAddress'
          value={formData.streetAddress}
          onChange={changeHandler}
          />


          <br/>

          <label htmlFor='city'> City :   </label>
          <br/>
          <input type='text'
          placeholder='city'
          name='city'
          id='city'
          value={formData.city}
          onChange={changeHandler}
          />


          <br/>

          <label htmlFor='state'> State :  </label>
          <br/>
          <input type='text'
          placeholder='Enter State'
          name='state'
          id='state'
          value={formData.state}
          onChange={changeHandler}
          />


          <br/>

          <label htmlFor='postalCode'> Postal Code :  </label>
          <br/>
          <input type='text'
          placeholder='postalCode'
          name='postalCode'
          id='postalCode'
          value={formData.postalCode}
          onChange={changeHandler}
          />


          <div className='fieldset'>

            <fieldset className='f1'>
              <legend> By Email</legend>

              
              <div className='check'>
                  <input type='checkbox'
                    id='comments'
                    name='comments'
                    checked={formData.comments}
                    onChange={changeHandler}
                    />
                  <div>
                    <label htmlFor='comments'> Comments </label>
                    <p>Get notified when someones posts a comment on a posting</p>
                  </div>   
              </div>

              <div className='check'>
                  <input type='checkbox'
                    id='candidates'
                    name='candidates'
                    checked={formData.candidates}
                    onChange={changeHandler}
                    />
                  <div>
                    <label htmlFor='candidates'> Candidates </label>
                    <p>Get notified when someones posts a comment on a posting</p>
                  </div>   
              </div>

              <div className='check'>
                  <input type='checkbox'
                    id='offers'
                    name='offers'
                    checked={formData.offers}
                    onChange={changeHandler}
                    />
                  <div>
                    <label htmlFor='offers'> Offers </label>
                    <p>Get notified when someones posts a comment on a posting</p>
                  </div>   
              </div>



            </fieldset>
          </div>


        <div className='f2'>
            <fieldset className='f1'>
              <legend>Push Notifications </legend>
              <p> This are delivered via SMS to your mobile phone .</p>

                <input type='radio'
                name='pushNotification'
                id='pushEverything'
                value="Everything"  
                onChange={changeHandler}
                />
                <label htmlFor='pushEverything'> Everything </label>


                <input type='radio'
                name='pushNotification'
                id='pushEmail'
                value="Same as email"  
                onChange={changeHandler}
                />
                <label htmlFor='pushEmail'> Same as email </label>


                <input type='radio'
                name='pushNotification'
                id='pushNothing'
                value="No Push Notifications"  
                onChange={changeHandler}
                />
                <label htmlFor='pushNothing'> No push </label>

            </fieldset>
        </div>


        <header>
            <button onClick={ToastHandler} > Save </button>
        </header>



    </form>
           

           

        </div>




  );

}



export default App;
