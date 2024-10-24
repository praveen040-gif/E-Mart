import React from 'react'
import './App.css'
import Landingpage from './stores/pages/landingpage'
import { Routes,Route } from 'react-router-dom'
import { mobileData } from './stores/data/mobiles'
import { computerData } from './stores/data/computers'
import { acData } from './stores/data/ac'
import { booksData } from './stores/data/books'
import { fridgeData } from './stores/data/fridge'
import { furnitureData } from './stores/data/furniture'
import {kitchenData} from './stores/data/kitchen'
import {menData} from './stores/data/men'
import {speakerData} from './stores/data/speaker'
import {tvData} from './stores/data/tv'
import {watchData} from './stores/data/watch'
import {womanData} from './stores/data/woman'
import Routingpage from './stores/pages/routingpage'
import Mobilesingle from './singles/mobilesingle'
import Usercart from './stores/usercart'
import Signin from './stores/pages/signin'
import Register from './stores/pages/register'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/mobile' element={<Routingpage routing={mobileData} name="mobile"/>}/>
        <Route path='/computers' element={<Routingpage routing={computerData} name="computers"/>}/>
        <Route path='/ac' element={<Routingpage routing={acData} name="ac"/> }/>
        <Route path='/books' element={<Routingpage routing={booksData} name="books"/>}/>
        <Route path='/fridge' element={<Routingpage routing={fridgeData} name="fridge"/>}/>
        <Route path='/furniture' element={<Routingpage routing={furnitureData} name="furniture"/>}/>
        <Route path='/kitchen' element={<Routingpage routing={kitchenData} name="kitchen"/>}/>
        <Route path='/men' element={<Routingpage routing={menData} name="men"/>}/>
        <Route path='/speaker' element={<Routingpage routing={speakerData} name="speaker"/>}/>
        <Route path='/tv' element={<Routingpage routing={tvData} name="tv"/>}/>
        <Route path='/watch' element={<Routingpage routing={watchData} name="watch"/>}/>
        <Route path='/women' element={<Routingpage routing={womanData} name="women"/>}/>
        <Route path='/mobile/:id' element={<Mobilesingle dynamicrouting={mobileData} />}/>
        <Route path='/computers/:id' element={<Mobilesingle dynamicrouting={computerData} />}/>
        <Route path='/ac/:id' element={<Mobilesingle dynamicrouting={acData} />}/>
        <Route path='/books/:id' element={<Mobilesingle dynamicrouting={booksData} />}/>
        <Route path='/fridge/:id' element={<Mobilesingle dynamicrouting={fridgeData} />}/>
        <Route path='/furniture/:id' element={<Mobilesingle dynamicrouting={furnitureData} />}/>
        <Route path='/kitchen/:id' element={<Mobilesingle dynamicrouting={kitchenData} />}/>
        <Route path='/men/:id' element={<Mobilesingle dynamicrouting={menData} />}/>
        <Route path='/speaker/:id' element={<Mobilesingle dynamicrouting={speakerData} />}/>
        <Route path='/tv/:id' element={<Mobilesingle dynamicrouting={tvData} />}/>
        <Route path='/watch/:id' element={<Mobilesingle dynamicrouting={watchData} />}/>
        <Route path='/women/:id' element={<Mobilesingle dynamicrouting={womanData} />}/>
        <Route path='/cart' element={<Usercart/>}/> 
        <Route path='/login' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
