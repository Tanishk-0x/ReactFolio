import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';


const CartItem = ({item , itemIndex}) => {

  const dispatch = useDispatch() ; 

  function removeFromCart () {
    dispatch(remove(item.id)) ; 
    console.log("item removed") ; 
  }


  return (


    <div>
      
      <div>
        <img src={item.image} />
      </div>

      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
      </div>

      <div>
        <p> {item.price} </p>
      </div>

      <div>
        <button onClick={removeFromCart} > Delete </button>
      </div>

      

    </div>


  );
};

export default CartItem
