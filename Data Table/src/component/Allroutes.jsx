// The Allroutes component sets up client-side routing for the application. 
// When a user navigates to different URLs within the app, the corresponding
//  components (Home, Product, AddProduct, EditProduct) are rendered. The 
//  dynamic route (/edit/:id) allows for editing specific products based on their id.
import { useState } from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import EditProduct from './EditProduct'
import Product from './Product';
import AddProduct from './AddProduct';
const Allroutes = () => {
  return (
    <div>
       <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/addto' element={<AddProduct/>}></Route>
        <Route path='/edit/:id' element={<EditProduct/>}></Route>
      </Routes>
    </div>
    </div>
  )
}

export default Allroutes
