import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { add  } from '../redux/Slices/CartSlice';

const Product = ({post}) => {

  const {cart} = useSelector((state) => state) ; 

  const dispatch = useDispatch() ; 

  function addToCart () {
    dispatch(add(post)) ; 
    console.log("Item Added to Cart") ; 
  }

  function removeFromCart () {
    dispatch(remove(post.id)) ; 
    console.log("Remove from Cart") ; 
  }

  return (


    <div>


        <div>
          <p> {post.title} </p>
        </div>

        <div>
          <p> {post.description} </p>
        </div>

        <div>
          <img src={post.image} />
        </div>

        <div>
          <p> {post.price} </p>
        </div>



          {
            cart.some( (p) => p.id == post.id ) ? 
            (<button onClick={removeFromCart} > Remove Item</button>) : 
            (<button onClick={addToCart} > Add to Cart </button>)
          }




    </div>


  ); 
}; 

export default Product
