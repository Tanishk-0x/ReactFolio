
# ------------- useEffect Hook ---------------------- 

 <!-- * useEffect hook = side effects ko manage krne ke liye hota he  -->

 <!-- SideEffect = `an action or operation that occurs in a component function but is not directly related to rendering the user interface` , 
<!--  side_effect = `esa koi bhi change jo jis component ko render kr rhe uske alawa outside khi per ho rha he use SideEffect kehte he ... ` -->

<!-- ! SideEffect => kisi component per koi action perform kra aur us component ko chhod kr paki bachhe hue kisi element per agar koi change hota he to use side effect kehte he .  -->


# UseEffect Hook = jis bhi component ke andar uneEffect likhte he to us Component ke RENDER hone ke baad jo bhi code useEffect ke andar hoga usko EXECUTE krega 
  
 <!-- * - Unmounting = jo component render ho chuka he / UI per aa chuka he  -->


   <!-- ------------- useEffect Hook ------------------>

   <!-- * variation : 1 (every render percha chalega)-->
    /*
      useEffect ( () => {
          console.log(" UI RENDERING DONE .{variation : 1} ... ") ; 
      }); 
    */  


   <!--* variation : 2 (only first render per chalega)--> 
  /*
      useEffect ( () => {
          console.log("UI RENDERING DONE .{variation : 2 } ... ") ; 
      }, [] );
  */  

 
   <!-- * variation : 3  (On first render and aur dependency change hogi jab hi chalega)-->
  <!-- ? jab hi chalega jab TEXT ki value change hogi-->
  /*
      useEffect ( () => {
          console.log(" change observer . {variation : 3} ... ") ; 
      }, [text] ); 
  */  


  <!--* variation : 4 -- (to handle unmounting of a component)-->
  <!-- ? --- naya listner lagane se pehle purana listener remove kro ---  -->

      useEffect ( () => {
        // -- add event listner -- 

          console.log(" Listner Added .. ") ; // fir Ye run hoga .. 

        return () => {
          console.log("Listner Removed .. ") ; // pehle Ye run hoga .. 
        }

      }, [text] ); 

  //---------------------------------------------

