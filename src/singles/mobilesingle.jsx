import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/navbar';
import { useCart } from '../stores/context/cartcontext';

const Mobilesingle = (props) => {
    let product;
    const {id}=useParams();
    const {Addtocart}=useCart()
    props.dynamicrouting.forEach((item)=>{
        if(item.id===id)
        {
            product=item;
        }
    })
    
    
  return (
    <>
    <Navbar/>
   
    <div className="ind-page">
        <div className="ind-img">
            <img src={product.image} alt=""/>
        </div>
        <div className="ind-details">
        <div className="ind-model">
            <h3>{product.company}</h3>
        </div>
        <div className="ind-model">
            <h2>{product.model}</h2>
        </div>
        <div className="ind-price">
            <h2>{product.price}</h2>
        </div>
        <div className="ind-desc">
            <p>
                {product.description}
            </p>
            </div>
            <button onClick={()=>Addtocart(product)}>Add to cart</button>
        </div>

    </div>
    </>
  )
}

export default Mobilesingle
