import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Cart from '../pages/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cart} = useSelector( (state) => state ) ; 

  return (


    <div>

        <div className='nav'>

          <NavLink to="/" >
            <div>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaQWhrDQw2yr6cQnEJsejX4ZVwr76O36uZQ&s' />
            </div>
          </NavLink>


          <div className='inner-nav'>

              <NavLink to="/" >
                <p> Home </p>
              </NavLink>

              <NavLink to="/cart">
                <div>
                  <FaCartShopping />
                  <span> {cart.length} </span>
                </div>
              </NavLink>

          </div>

        </div>

    </div>


  )
}

export default Navbar
