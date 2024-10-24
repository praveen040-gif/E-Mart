import { createContext, useContext, useState } from "react";




const Cartcontext = createContext()

export const Cartprovider=({children})=>
{
    const [cartitems,setcartitems]=useState([])
    const Addtocart=(item)=>
    {
        setcartitems([...cartitems,item])
    }
    const Removefromcart=(item)=>
    {
        setcartitems(cartitems.filter((apple)=>apple!==item))
    }
    return (
        <Cartcontext.Provider value={{cartitems,Addtocart,Removefromcart}}>
            {children}
        </Cartcontext.Provider>
    )
}
export const useCart=()=>{
    return useContext(Cartcontext)
}
