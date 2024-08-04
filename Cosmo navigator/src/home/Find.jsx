import React from 'react'
import Navbar from '../component/Navbar'
import Foter from '../component/Footer'
import '../home/Finds.css'
import { Container } from 'react-bootstrap'
const Find = () => {
  return (
    <div>
      <Navbar/>
      <div className="image1 pt-5 ">
        <div className="mt-5 pt-5  ">
          <h1 style={{fontSize: "80px"}} className='text-white text-center mt-5  pt-5 '>GEAR FINDER</h1>
         <h1 className='text-white text-center'>Find the perfect gear for your needs</h1>
          </div>
      </div>
      <div className="">
        <Container>
        <p className='mt-5 ps-2 m-auto col-11'>If you're asking yourself "what's the right gear for me?", we designed a tool to make finding the perfect sleeping bag or tent a bit easier. Answer a few questions and you'll be matched with the right sleeping bag or tent for your needs, whether you're going backpacking, car camping or both.</p>
        </Container>
      </div>
      <Container>
      <div className="row p-5">
        <div className="card  col-6  ps-5" style={{border:"none"}}>
   <img src="https://i.shgcdn.com/5ec9e4f7-8a6e-4f97-8543-8c6101449a9f/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" className='' />
   <h3 className='position-absolute  text-white fw-bold ms-3  bgdark w-100 h-100 '  style={{fontSize:"50px",display:"flex", alignItems:"center"}}>FIND YOUR SLEEPING BAG</h3>
        </div>
        <div className="card  col-6  pe-5" style={{border:"none"}}>
   <img src="https://i.shgcdn.com/e8681777-b88b-4014-a333-cbf7f8fbd04a/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" className='' />
   <h3 className='position-absolute text-white  fw-bold  bgdark ms-5 ps-4 h-100 '  style={{fontSize:"50px",display:"flex", alignItems:"center",  }}>FIND YOUR TENT</h3>
        </div>
      </div>
      </Container>
      <Foter/>
    </div>
  )
}

export default Find
