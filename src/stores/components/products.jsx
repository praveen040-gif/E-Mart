import React from 'react'
import Productdisplay from './productsdisplay'
import { computerData } from '../data/computers'
import { mobileData } from '../data/mobiles'
import {acData} from '../data/ac'
// import {booksData} from '../data/books'
import {fridgeData} from '../data/fridge'
import {furnitureData} from '../data/furniture'
import {kitchenData} from '../data/kitchen'
import {menData} from '../data/men'
import {speakerData} from '../data/speaker'
import {tvData} from '../data/tv'
import {watchData} from '../data/watch'
import {womanData} from '../data/woman'



const Products = () => {
    const mobile1=mobileData.slice(0,5);
    const computer1=computerData.slice(0,5);
    const ac1=acData.slice(0,5);
    // const books1=booksData.slice(0,5);
    const fridge1=fridgeData.slice(0,5);
    const furniture1=furnitureData.slice(0,5);
    const kitchen1=kitchenData.slice(0,5);
    const men1=menData.slice(0,5);
    const speaker1=speakerData.slice(0,5);
    const tv1=tvData.slice(0,5);
    const watch1=watchData.slice(0,5);
    const woman1=womanData.slice(0,5);
  
  return (
    <div>
      <Productdisplay product={mobile1} heading="Mobiles"/>
      <Productdisplay product={computer1} heading="Computers"/>
      <Productdisplay product={ac1} heading="Ac"/>
      {/* <Productdisplay product={books1} heading="Books"/> */}
      <Productdisplay product={fridge1} heading="Fridge"/>
      <Productdisplay product={furniture1} heading="Furniture"/>
      <Productdisplay product={kitchen1} heading="Kitchen"/>
      <Productdisplay product={men1} heading="Mens"/>
      <Productdisplay product={speaker1} heading="Speakers"/>
      <Productdisplay product={tv1} heading="Tv"/>
      <Productdisplay product={watch1} heading="Watch"/>
      <Productdisplay product={woman1} heading="Women"/>
    </div>
  )
}

export default Products
