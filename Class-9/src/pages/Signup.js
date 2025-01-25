import React from 'react'
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {

    //^// template me kuch chije pass kri he *}


  return (

      <Template
      title ="Join the Notion"
      desc1= "Build skills for today, tomorrow , and beyond"
      desc2= "Education to future proof your career."
      image = "https://img.freepik.com/premium-vector/professional-web-developer-working-laptop-horizontal-banner_1310786-31112.jpg"
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      />

  )


}

export default Signup
