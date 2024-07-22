import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Login from './Login'
import Product from './Product'
import Description from './Description'
import PrivatePage from './PrivateRoute'
const Allrouts = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Navbar/>}> </Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product" element={<PrivatePage> <Product/> </PrivatePage>}></Route>
        <Route path='/description/:id' element={<Description/>} ></Route>
       
      </Routes>
    </div>
  )
}

export default Allrouts
