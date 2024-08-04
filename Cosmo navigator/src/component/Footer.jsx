import React from 'react'
import { Container } from 'react-bootstrap' 
import { Link } from 'react-router-dom'
const Foter = () => {
  return (
    <div>
       <Container className='mt-5 p-0 pt-4'>
        <div className="row mt-5 col-12">
           <div className="card col-4 mb-1" style={{border:"none"}}>
            <img src="https://cdn11.bigcommerce.com/s-2nze2/images/stencil/original/image-manager/group-shot-reachout.png?t=1644358718" alt="" />
            <h4 className='fw-bold'>REACH OUT </h4>
            <p>Our Partnerships with Nonprofits</p>
           </div>
           <div className="card col-4 mb-1" style={{border:"none"}}>
            <img src="https://cdn11.bigcommerce.com/s-2nze2/product_images/uploaded_images/hiker-pack-warranty2.png" alt="" />
           <h4 className='fw-bold'> LIFETIME WARRANTY </h4>
           <p>Gear meant to last</p>
           </div>
           <div className="card col-4" style={{border:"none"}}>
            <img src="https://cdn11.bigcommerce.com/s-2nze2/product_images/uploaded_images/hiker-blog-image.png" alt="" />
           <h4 className='fw-bold mb-1'>TIPS FOR YOUR NEXT ADVENTURE </h4>
           <p>Check out the blog</p>
           </div>
        </div>
        </Container>
        <div className=" " style={{backgroundColor:"black"}}>
            <Container className='p-0 '>
                <div className="d-flex mt-5 pt-5">
          <ul className='list-unstyled pe-5'>
            <h5 className='fw-bold text-white mb-4' style={{}}>SHOP</h5>
            <li className='mb-2'><Link className='navbarlink '>Tents</Link></li>
            <li className='mb-2'><Link className='navbarlink '>Sleeping Bags</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Backpacks</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Men's Apparel</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Women's Apparel</Link></li>
          </ul>
          <ul className='list-unstyled pe-5'>
            <h5 className='fw-bold text-white mb-4' style={{}}>Help</h5>
            <li className='mb-2'><Link className='navbarlink '>Your Account</Link></li>
            <li className='mb-2'><Link className='navbarlink '>FAQ</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Contact Us</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Shipping</Link></li>
          </ul>
          <ul className='list-unstyled pe-5'>
            <h5 className='fw-bold text-white mb-4' style={{}}>About</h5>
            <li className='mb-2'><Link className='navbarlink '>Blog</Link></li>
            <li className='mb-2'><Link className='navbarlink '>Our Story</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Affiliate Program</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Social Responsibility</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Accessibility Statement</Link></li>
            <li className='mb-2'><Link className='navbarlink'>CA Prop 65 FAQ</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Sitemap</Link></li>
          </ul>
          <ul className='list-unstyled pe-5'>
            <h5 className='fw-bold text-white mb-4' style={{}}>Product</h5>
            <li className='mb-2'><Link className='navbarlink '>Return Policy</Link></li>
            <li className='mb-2'><Link className='navbarlink '>Product Care</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Product Registration</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Parts & Warranty Info</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Pro Purchase Program</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Distributors</Link></li>
          </ul>
          <ul className='list-unstyled '>
            <h5 className='fw-bold text-white mb-4' style={{}}>Social</h5>
            <li className='mb-2'><Link className='navbarlink '>instagram</Link></li>
            <li className='mb-2'><Link className='navbarlink '>facebook</Link></li>
            <li className='mb-2'><Link className='navbarlink'>twitter</Link></li>
            <li className='mb-2'><Link className='navbarlink'>Men's Apparel</Link></li>
            <li className='mb-2'><Link className='navbarlink'>youtube</Link></li>
          </ul>
         <div className="">
          <h5 className='fw-bold text-white'>Enter your email</h5>
          <p className='text-white'>Get the most up to date info on new products, promos and camping </p>
          <div className="" style={{border:"4px solid white,"}}>
           <input type="email" name="" id="" className='fs-4 col-6 text-white'  style={{backgroundColor:"black",outline: "none" ,border:"none" }} /> 
           <button style={{backgroundColor:"white" , border:"none" }} className='fs-5 p-2 col-6'>SIGN UP </button>
           </div>
          </div>
          </div>
          <div className="mt-5  pb-3">
          <span className='text-white'> 2024 Sierra Designs | All Rights Reserved</span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
          <span className='text-white'>Terms of Use &nbsp;&nbsp;&nbsp;&nbsp; Accessibility &nbsp;&nbsp;&nbsp;&nbsp;  Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;  CTSCA Disclosure</span>
          </div>
            </Container>
        </div>
    </div>
  )
}

export default Foter
