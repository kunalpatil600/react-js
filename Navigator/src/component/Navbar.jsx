import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { AuthContext } from './AuthContext';
import { Container } from 'react-bootstrap';
const Navbar = () => {
  const { logout } = useContext(AuthContext)
  return (
    <Container>
      <div>
        <ul className='d-flex list-unstyled justify-content-between mt-2'>
          <li><NavLink to={"/home"} className="fw-bold fs-5" style={{ textDecoration: "none" }}>HOME</NavLink></li>
          <li><NavLink to={"/login"} className="fw-bold fs-5" style={{ textDecoration: "none" }}>LOGIN</NavLink></li>
          <li><NavLink to={"/product"} className="fw-bold fs-5" style={{ textDecoration: "none" }}>PRODUCT </NavLink></li>
          <li> <button onClick={logout} style={{border:"2px solid red",borderRadius:"10px" ,fontWeight:"bold",padding:"3px 10px ", backgroundColor:"white", color:"red"}}> LOGOUT</button></li>
        </ul>
      </div>
    </Container>
  )
}

export default Navbar
