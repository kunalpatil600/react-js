// This component sets up different routes for the application. 
// Each route corresponds to a different URL path and renders a specific 
// component. The PrivatePage component is used to protect certain
//routes (in this case, the /product route), ensuring that they can
//only be accessed under certain conditions (e.g., user authentication).
// The route /description/:id uses a dynamic parameter (:id) that can 
//change based on the URL, allowing for dynamic rendering of content based on the provided ID.

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
      <Route path='/' element={<Home/>}> </Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/product" element={<PrivatePage> <Product/> </PrivatePage>}></Route>
        <Route path='/description/:id' element={<Description/>} ></Route>
       
      </Routes>
    </div>
  )
}

export default Allrouts
