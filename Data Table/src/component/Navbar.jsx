import React from 'react'
import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <Container>
                <ul className='d-flex justify-content-between list-unstyled'>
                    <li><NavLink to={"/"}>HOME</NavLink></li>
                    <li> <NavLink to={"/product"}>PRODUCTS</NavLink></li>
                    <li> <NavLink to={"/addto"}>ADDPRODUCT</NavLink></li>
                    <li> <NavLink to={"/edit"}>EDITPRODUCT</NavLink></li>

                </ul>
            </Container>
        </div>
    )
}

export default Navbar
