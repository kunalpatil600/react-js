import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {
    const [data,setdata]=useState([]) 
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>
        {setdata(res.data)})
    .catch((err)=>{console.log(err)})
  return (
    <div>
      <Navbar/>
      
       <div className="d-flex  flex-wrap mt-5 p-5">
         {data.map((el)=>(  
        <div className="col-3" key={el.id} >
            <Link to={`/description/${el.id}`}>
            <img src={el.image} alt="" className='h-50 w-75'  />
            </Link>
            <h5>{el.title}</h5>
            <p>{el.price}</p>
            <p>{el.description.substring(0,100)}</p>
            <p>{el.category}</p>
           
          </div>
         
         ))}
       
    </div>
    </div>
  )
}

export default Product
