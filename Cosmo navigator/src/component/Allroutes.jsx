import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Find from '../home/Find';
import Category from '../home/Category';
import Description from './Description';
import New from '../home/New';
import Login from './Login';
import Privatepage from './Privatepage'
import Cart from './Cart'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/description/:id" element={<Privatepage><Description /></Privatepage>} />
        <Route path="/new" element={<New />} />
      <Route path='/cart' element={<Cart/>}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
