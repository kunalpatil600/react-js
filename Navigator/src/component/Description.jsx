import React, { useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Description = () => {

    const [singlepagedata,setsinglepagedata]=useState([])
    const param=useParams() 
    axios.get(`https://fakestoreapi.com/products/${param.id}`)
    .then((res)=>
        {setsinglepagedata(res.data)})
    .catch((err)=>{console.log(err)})
    return (
    <div >
      <Navbar/>
      <div className="text-center mt-5 pt-3">
        {
          singlepagedata.map((el)=>(
            <div key={el.id}>
               <img src={el.image[2]} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Description
