import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Productpage from './Productpage'
import Loginpage from './Loginpage'
import Privetpage from './Privetpage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Privetpage><Productpage/></Privetpage>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
