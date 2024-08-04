import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import '../home/Homes.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Foter from '../component/Footer'
const Home = () => {
  const [data, setdata] = useState([])
  const [data2,setdata2]=useState([])
  const [data3,setdata3]=useState([])
  const fetchdata=()=>{
    axios.get("http://localhost:3000/product1").then((res) => { setdata(res.data) })
    .catch((err) => console.log(err))   
    axios.get("http://localhost:3000/product2").then((res) => { setdata2(res.data) })
    .catch((err) => console.log(err))

   axios.get("http://localhost:3000/product3").then((res)=>{setdata3(res.data)})
  } 
  useEffect(()=>{
  
  fetchdata()
  },[])
  return (
    <div>
      <Navbar />
      <div className="imagebg ps-3" style={{ marginTop: "-3.2%" }}>
        <div className="mt-5 pt-5 ms-5 ps-5 ">
          <div className="mt-5 pt-5">
            <h1 className='mt-5 pt-5 text-white mb-3 fw-bold' style={{ fontSize: "60px" }}>MAKE YOUR OWN TRAIL</h1>
            <h4 className='text-white fw-bold mb-4'>We've got you covered for any adventure</h4>
            <Link className='fs-5 text-white ' style={{ textDecoration: "none", backgroundColor: "black", border: "2px solid white", padding: "12px 25px", borderRadius:"10px" }}>Shop Now</Link>
          </div></div>
      </div>
      <Container>
        <h1 className='fw-bold mt-5'>FEATURED GEAR</h1>
        <div className="row">

          <div className="card  col-4" style={{ border: "none" }} >
            <div className="">
              <img src="https://i.shgcdn.com/fd4773a1-5678-47c6-a7ed-c0252bf4f526/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" className='col-12' />
              <li style={{ marginTop: "-13%" }} className='list-unstyled ms-5 '>  <Link style={{ textDecoration: "none", backgroundColor: "black", padding: "12px 25px ", borderRadius: "10px ", border: "2px solid white" }} className='text-white fw-bold fs-5'>Shop Sleeping Bags</Link></li>
            </div>
          </div>
          <div className="card  col-4" style={{ border: "none" }}>
            <div className="">
              <img src="https://i.shgcdn.com/6d916a0a-b481-420a-92c7-f2c64b133327/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" className='col-12' />
              <li style={{ marginTop: "-13%" }} className='list-unstyled ms-5 '>  <Link style={{ textDecoration: "none", backgroundColor: "black", padding: "12px 40px ", borderRadius: "10px ", border: "2px solid white" }} className='text-white fw-bold fs-5'>Shop Pack</Link></li>

            </div>
          </div>
          <div className="card col-4" style={{ border: "none" }}>
            <div className="">
              <img src="https://i.shgcdn.com/0f3a4c01-9a4e-487c-8829-3e6e389ec76b/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" className='col-12' />
              <li style={{ marginTop: "-13%" }} className='list-unstyled ms-5 '>  <Link style={{ textDecoration: "none", backgroundColor: "black", padding: "12px 40px ", borderRadius: "10px ", border: "2px solid white" }} className='text-white fw-bold fs-5'>Shop Tents</Link></li>

            </div>
          </div>
        </div>
      </Container>

      <div className="mt-5 pt-4">
        <h1 className='fw-bold ms-5 ps-5  d-inline'>AWARD WINNERS  </h1> <span className='fw-bold'>/ SHOP ALL</span>
        <div className="d-flex w-90 ms-5 mt-4  ps-4 slider-slide pb-3" style={{ overflowX: "scroll" }}>
          {
            data.map((el) => (
              <div className='marl ms-4' key={el.id}>
             <Link to={`/description/${el.id}`}>                <div className="products-images-main">
                  <img src={el.image[0]} alt="" className='sliderimg' />
                  <div className="products-images text-center pt-5 w-100 h-100" style={{ backgroundColor: "#E3DFDE" }} >
                    <h4 className='col-6 m-auto mt-5 pt-5 mb-3 fw-bold  text-dark'>{el.hover}</h4>
                    <h5 className='col-12 text-dark'>{el.hover2}</h5>
                  </div>
                  
                </div>
                </Link>
                <div className="d-flex mb-4 mt-2 justify-content-between col-12">
                  <h4 className='d-inline fw-bold'>{el.title}</h4>
                  <h5 className='d-inline'>${el.price}</h5>
                </div>
                <h5 className=''>{el.title2}</h5>
                <h5 className='fw-bold'>{el.title3}</h5>
              </div>
            ))
          }

        </div>
        <div className="image2">
        <div className="mt-5 pt-5 ms-5 ps-5 ">
          <div className="mt-5 pt-5">
            <h1 className='mt-5 pt-5 text-white mb-3 fw-bold' style={{ fontSize: "60px" }}>FIND THE RIGHT GEAR FOR YOU </h1>
            <h4 className='text-white fw-bold mb-5'>Use our gear finder to find the best gear for your next adventure</h4>
            <Link className='fs-5 text-white  ' style={{ textDecoration: "none", backgroundColor: "black", border: "2px solid white", padding: "12px 25px",borderRadius:"10px" }}>Find Tents</Link>
            <Link className='fs-5 text-white  ms-3' style={{ textDecoration: "none", backgroundColor: "black", border: "2px solid white", padding: "12px 25px", borderRadius:"10px" }}>Find Sleeping Bags</Link>
        
          </div></div>
        </div>
        <div className="mt-5 pt-4">
        <h1 className='fw-bold ms-5 ps-5  d-inline'>NEW ARRIVALS   </h1> <span className='fw-bold'>/ SHOP ALL</span>
        </div>
        <div className="d-flex w-90 ms-5 mt-4 mb-5 ps-4 slider-slide " style={{ overflowX: "scroll" }}>
          {
            data2.map((el) => (
              <div className='marl ms-4' key={el.id}>
                  <Link to={`/description/${el.id}`}>   
                <div className="products-images-main">
                  <img src={el.image[0]} alt="" className='sliderimg2' />
                  <div className="products-images text-center w-100 h-100" style={{ backgroundColor: "#E3DFDE" }} >
                    <img src={el.hover} alt="" className='sliderimg' />
                  </div>
                </div>
                </Link>
                <div className="d-flex pb-2 mt-2 justify-content-between col-12">
                  <h4 className='d-inline ' style={{fontWeight:"600"}}>{el.title}</h4>
                  <h5 className='d-inline'>${el.price}</h5>
                </div>
              </div>
            ))
          }

        </div>
   <a href="https://www.youtube.com/watch?v=-hOvTOfdBDM" style={{ textDecoration:"none"}}>
        <div className="image3">
        <div className="mt-5 pt-5 ms-5 ps-5 ">
          <div className="mt-5 pt-5">
            <h1 className='mt-5 pt-5 text-white mb-3 fw-bold ' style={{ fontSize: "60px" }}>WAY GO ZIPPERLESS? </h1>
            <h5 className='text-white fw-bold mb-5 col-5'>By removing the zipper from a sleeping bag, you reduce restriction, which allows you to sleep how you’d like, leading to a more comfortable night's sleep.</h5>
            <Link className='fs-5 text-white  ' style={{ textDecoration: "none", backgroundColor: "black", border: "2px solid white", padding: "12px 25px", borderRadius:"10px"}}>WATCH NOW </Link>
          </div></div>
        </div>
        </a>
        <div className="mt-5 pt-4">
        <h1 className='fw-bold ms-5 ps-5  d-inline'>NEW ARRIVALS   </h1> <span className='fw-bold'>/ SHOP ALL</span>
        </div>
        <div className="d-flex w-90 ms-5 mt-4 mb-5 ps-4 slider-slide " style={{ overflowX: "scroll" }}>
          {
            data3.map((el) => (
              <div className='marl ms-4' key={el.id}>
              <Link to={`/description/${el.id}`}>   
                <div className="products-images-main">
                  <img src={el.image[0]} alt="" className='sliderimg2 col-12' />
                  <div className="products-images text-center w-100 h-100">
                    <img src={el.hover} alt="" className='sliderimg' />
                  </div>
                </div>
              </Link>
              <div className="d-flex pb-2 mt-2 justify-content-between col-12">
                <h4 className='d-inline fw-bold'>{el.title}</h4>
                <h5 className='d-inline'>${el.price}</h5>
              </div>
            </div>
            ))
          }

        </div>
        <div className="image4">
        <div className="mt-5 ms-5 ps-5 ">
            <h1 className='mt-5 pt-5 text-white mb-1 fw-bold' style={{ fontSize: "60px" }}>ADVENTURE WITHIN REACH  </h1>
            <h5 className='text-white col-5  mb-5'>Throughout 2022 we will be partnering with four organizations: Women’s Wilderness, LGBT Outdoors, Outdoors For All Foundation, and Soul Trak Outdoors — to address common barriers to outdoor recreation with a 1% donation of all web sales, gear donation, education and awareness-raising messaging. </h5>
            <Link className='fs-5 text-white ' style={{ textDecoration: "none", backgroundColor: "black", border: "2px solid white", padding: "12px 25px", borderRadius:"10px" }}>LOREN MORE</Link>
          </div>
        </div>
       <Foter/>
      </div>
    </div>


  )
}

export default Home
