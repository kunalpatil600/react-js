import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-evenly bg-dark fixed-top '>
      <Link to={"/"} style={{textDecoration:"none"}} className='fs-4 text-white fw-bold'>PRODUCTPAGE</Link>
      <Link to={"/login"} style={{textDecoration:"none"}} className='fs-4 text-white fw-bold'>LOGIN</Link>
      
    </div>
  )
}

export default Navbar
