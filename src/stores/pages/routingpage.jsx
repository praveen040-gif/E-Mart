import React from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Routingpage = (props) => {
  const [selectedproduct,setselectedproduct]=useState([]);
  const companyHandler=(mango)=>
  {
    if(selectedproduct.includes(mango))
    {
      setselectedproduct(selectedproduct.filter(item => item !==mango))
    }
    else{
      setselectedproduct([...selectedproduct,mango])
    }

  }
  const filteredProduct=selectedproduct.length===0?
        props.routing:props.routing.filter((orange)=>selectedproduct.includes(orange.brand))
      console.log(filteredProduct)
  
  return (
    <>
    <Navbar/>
    <div className="fullpage">

    <div className="pro-selected">
      {
        props.routing.map((mobile)=>{
          console.log(mobile)
          return(
            <div className='pro-input'>
              <label>
                <input type="checkbox" checked={selectedproduct.includes(mobile.brand)} onChange={()=>companyHandler(mobile.brand)}/>
                {mobile.brand}
              </label>
              </div>
          )
        })
      }
    </div>
    <div className='pagesection'>
            {
              
              filteredProduct.map((item)=>
                {
                    return(
                      <div>
                     <Link to={`/${props.name}/${item.id}`}> 
                     <div className='pageimage'>
                      <img src={item.image} alt="" />
                      </div></Link>
                      <div className="promodel">
                          {item.brand},{item.model}
                      </div>
                      </div>

  
                  )
                  

                })
            }
      
    </div>
    </div>
    </>
  )
}

export default Routingpage
