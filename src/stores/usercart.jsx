import React from 'react'
import { useCart } from './context/cartcontext'

const Usercart = () => {
    const {cartitems,Removefromcart}=useCart()
  return (
    <div>
      {cartitems.map((item)=>{
        return(
            <div className="cartsection">
                <div className="cart-image">
                    <img src={item.image} alt=""/>
                </div>
                <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h2>{item.price}</h2>
                    <h3>{item.model}</h3>
                <button className='removeBtn' onClick={() => Removefromcart(item)}>Remove</button>
                </div>
            </div>

        )
      })}
    </div>
  )
}

export default Usercart
