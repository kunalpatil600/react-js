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
      <div className="fixed-top" style={{ backgroundColor: "#241F1F", borderBottom:"3px solid yellow" }}>
        <Container className='pt-0  p-0'>
          
          <div className='d-flex navbar navbar-expand-lg  col-12 justify-content-around' style={{ alignItems: "center" }}>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop">
            <span class="navbar-toggler-icon"><i class="bi bi-list fs-1"></i></span>
          </button>
            <Link to={"/"} className='col-2'> <img src={logo} alt="" className='col-12' /></Link>
          
            <div className=" collapse col-4  navbar-collapse">
              <ul className='d-flex col-10   mt-4 justify-content-between list-unstyled'>
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
            <div className="collapse navbar-collapse col-1">
            <div className="pt-3   mb-2 pb-0" style={{ borderBottom: "2px solid white" }}>
              <input type="text" name="" id="" style={{ backgroundColor: "#241F1F", color: 'white', border: "none", outline: "none" }} placeholder='SEARCH' />
              <a href="" style={{ textDecoration: "none" }}>  <i className="bi bi-search-heart text-white fs-5"></i></a>
            </div>
            </div>
            <div className="pt-2">
           <Link to={"/login"}>   <i className="bi bi-person-arms-up text-white fw-bold fs-3 pe-4"></i></Link>
           <Link to={"/cart"}><i className="bi bi-shop-window text-white fw-bold fs-3 "></i></Link>
            </div>
          </div>
        </Container>
        <div class="offcanvas offcanvas-top h-50" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasTopLabel">navigation </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="col-12 d-flex container justify-content-between ps-5">
              <ul class=" list-unstyled   mt-2 ps-lg-0" >
                  <li class="nav-item "><a href="" class="nav-link  text-dark fw-bold">COLLABS</a></li>
                  <li class="nav-item"><a href="shoes.html" class="nav-link  text-dark fw-bold">BASKETS</a></li>
                  <li class="nav-item"><a href="" class="nav-link text-dark  fw-bold">LOOKBOOK</a></li>
                  <li class="nav-item"><a href="" class="nav-link text-dark  fw-bold">MANIFESTE</a></li>
                  <li class="nav-item"><a href="" class="nav-link text-dark  fw-bold">OUTLET</a></li>
              </ul>
              <ul class="list-unstyled ">
                  <li class="nav-item "><a href="" class="nav-link  fw-bold"><i class="bi bi-search text-dark fs-4"></i></a></li>
                  <li class="nav-item"><a href="" class="nav-link  fw-bold"><i class="bi bi-geo-alt text-dark fs-4"></i></a></li>
                  <li class="nav-item"><a href="" class="nav-link  fw-bold"><i class="bi bi-heart text-dark  fs-4"></i></a></li>
                  <li class="nav-item "><a href="form.html" class="nav-link  fw-bold"><i class="bi bi-person text-dark fs-4"></i></a></li>
                  <li class="nav-item"><a href="add.html" target="_blank" class="nav-link  fw-bold" ><i class="bi bi-bag text-dark fs-4"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;
