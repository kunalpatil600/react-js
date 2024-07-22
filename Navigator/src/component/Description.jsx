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
      <img src={singlepagedata.image} alt="" className='col-2 mb-3' />
      <h3>{singlepagedata.title}</h3>
      <h5>{singlepagedata.price}</h5>
      <h6 className='col-4  m-auto'>{singlepagedata.description} </h6>
      </div>
    </div>
  )
}

export default Description
