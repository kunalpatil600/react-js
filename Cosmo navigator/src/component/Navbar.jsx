import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../Images/image.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  }

  return (
    <div className="mb-5  pb-4">
      <div className="fixed-top " style={{ backgroundColor: "#241F1F", borderBottom:"3px solid yellow" }}>
        <Container className='pt-0  p-0'>
          <div className='d-flex  col-12 justify-content-between' style={{ alignItems: "center" }}>
            <Link to={"/"} className='col-2'> <img src={logo} alt="" className='col-12' /></Link>
            <div className="col-5">
              <ul className='d-flex mt-4 justify-content-between list-unstyled'>
                <li className="navbarlink"> <Link className='navbarlink pb-5 fs-5'>SHOP</Link>
                  <div className="drop">
                    <div className="d-flex mt-4 mb-4 hii">
                      <div className="p-3">
                        <button onClick={() => handleCategoryClick("men's clothing")} style={{backgroundColor:"transparent", border:"none"}} className='text-white fw-bold'>Men</button>
                        <a className="dropdown-item mt-3" href="#">Jackets & Vests</a>
                        <a className="dropdown-item mt-3" href="#">Wind & Rainwear</a>
                        <a className="dropdown-item mt-3" href="#">Tops</a>
                        <a className="dropdown-item mt-3" href="#">Bottoms</a>
                        <a className="dropdown-item mt-3" href="#">Accessories</a>
                      </div>
                      <div className="p-3">
                        <button onClick={() => handleCategoryClick("women's clothing")}  style={{backgroundColor:"transparent", border:"none"}} className='text-white fw-bold'>Women</button>
                        <a className="dropdown-item mt-3" href="#">Jackets & Vests</a>
                        <a className="dropdown-item mt-3" href="#">Wind & Rainwear</a>
                        <a className="dropdown-item mt-3" href="#">Tops</a>
                        <a className="dropdown-item mt-3" href="#">Bottoms</a>
                        <a className="dropdown-item mt-3" href="#">Accessories</a>
                      </div>
                      <div className="p-3">
                        <button onClick={() => handleCategoryClick('tent')}  style={{backgroundColor:"transparent", border:"none"}} className='text-white fw-bold'>Tent</button>
                        <a className="dropdown-item mt-3" href="#">Ultralight Tents</a>
                        <a className="dropdown-item mt-3" href="#">Backpacking Tents</a>
                        <a className="dropdown-item mt-3" href="#">Camping Tents</a>
                        <a className="dropdown-item mt-3" href="#">4-Season</a>
                        <a className="dropdown-item mt-3" href="#">Shelters</a>
                        <a className="dropdown-item mt-3" href="#">Accessories</a>
                      </div>
                      <div className="p-3">
                        <button onClick={() => handleCategoryClick('jewelery')}  style={{backgroundColor:"transparent", border:"none"}} className='text-white fw-bold'>Sleep Systems</button>
                        <a className="dropdown-item mt-3" href="#">Zipperless Sleeping Bags</a>
                        <a className="dropdown-item mt-3" href="#">Zippered Sleeping Bags</a>
                        <a className="dropdown-item mt-3" href="#">Down Blankets & Quilts</a>
                        <a className="dropdown-item mt-3" href="#">Hammocks & Pads</a>
                        <a className="dropdown-item mt-3" href="#">Accessories</a>
                      </div>
                      <div className="p-3">
                        <h5 className='dropdown-item fw-bold'>Packs</h5>
                        <a className="dropdown-item mt-3" href="#">Backpacking Packs</a>
                        <a className="dropdown-item mt-3" href="#">Daypacks</a>
                        <a className="dropdown-item mt-3" href="#">Coolers</a>
                        <a className="dropdown-item mt-3" href="#">Pack Accessories</a>
                      </div>
                      <div className="p-3">
                        <h5 className='dropdown-item fw-bold'>Shop More</h5>
                        <a className="dropdown-item mt-3" href="#">Sun Protection</a>
                        <a className="dropdown-item mt-3" href="#">New Arrivals</a>
                        <a className="dropdown-item mt-3" href="#">Award Winners</a>
                        <a className="dropdown-item mt-3" href="#">Adventure Out</a>
                        <a className="dropdown-item mt-3" href="#">Everest Basecamp</a>
                        <a className="dropdown-item mt-3" href="#">4-Season Gear</a>
                        <a className="dropdown-item mt-3" href="#">Family Camping</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>  <Link className='navbarlink fs-5'>EXPLORE </Link></li>
                <li> <Link to={"/find"} className='navbarlink fs-5'> FIND GEAR </Link></li>
                <li> <Link to={"/new"} className='navbarlink fs-5'>NEW  </Link></li>
                <li>  <Link  className='navbarlink fs-5'>SALE </Link></li>
              </ul>
            </div>
            <div className="pt-3 mb-2 pb-0" style={{ borderBottom: "2px solid white" }}>
              <input type="text" name="" id="" style={{ backgroundColor: "#241F1F", color: 'white', border: "none", outline: "none" }} placeholder='SEARCH' />
              <a href="" style={{ textDecoration: "none" }}>  <i className="bi bi-search-heart text-white fs-5"></i></a>
            </div>
            <div className="pt-2">
           <Link to={"/login"}>   <i className="bi bi-person-arms-up text-white fw-bold fs-3 pe-4"></i></Link>
              <i className="bi bi-shop-window text-white fw-bold fs-3 "></i>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar;
