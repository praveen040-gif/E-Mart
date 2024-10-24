import React from 'react'
const Productsdisplay = (props) => {  
  return (
    <>
    <div className='protitle'>
        <h2>{props.heading}</h2>
    </div>
    <div className='prosection'>
        {
            props.product.map((item)=>{
                return(
                    <div className='imgbox'>
                        <img className="proimg" src={item.image} alt=""/>
                    </div>

                )
            })
        }
    </div>
    </>
  )
  
}

export default Productsdisplay
