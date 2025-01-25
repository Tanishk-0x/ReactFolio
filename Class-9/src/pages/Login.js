import React from 'react'
import Template from '../components/Template'
// import sideimage from "./assests/sideimage.png"

const Login = ({setIsLoggedIn}) => {

    //^// template me kuch chije pass kri he *}

  return (


      <Template
      title = "Welcome Back"
      desc1= "Build skills for today, tommoow , and beyond"
      desc2= "Education to future proof your career."
      image= "https://img.freepik.com/premium-vector/cute-programmer-debugging-code-cartoon-vector_865091-13403.jpg?semt=ais_hybrid"
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      />

    
  )
}

export default Login
