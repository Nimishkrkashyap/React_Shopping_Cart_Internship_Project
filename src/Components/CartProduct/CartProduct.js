import React from 'react'
import './CartProduct.css'
import {AiFillPlusSquare, AiFillMinusSquare} from 'react-icons/ai'

const CartProduct = ({item, handleRemove, handleDecrement, handleIncrement }) => {

  
  const {count, id, title, price, description, category, thumbnail} = item;
  
 
  return (
    <div className='cartProductContainer'>
        <div className='cartProductLeft'>
            <img className='cartProductImage' src={thumbnail} alt={title}/>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>{category}</h3>
            </div>
        </div>
        <div className='cartProductRight'>
            <h1>{price}</h1>
            <div className='productCount'>
              <button onClick={() => handleDecrement(id)}><AiFillMinusSquare /></button>
              <p>{count}</p>
              <button onClick={() => handleIncrement(id)}><AiFillPlusSquare /></button>
            </div>
            <h1>99.99<span><button onClick={() => handleRemove(id)}>remove</button></span></h1>
        </div>
    </div>
  )
}

export default CartProduct