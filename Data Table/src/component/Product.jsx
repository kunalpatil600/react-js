// This code is a simple React application that allows you to manage products,
//  including viewing, adding, editing, and deleting products. The application uses
//   react-router-dom for routing and axios for making HTTP requests to a backend server.
//    The application also uses react-bootstrap for styling.
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import { Container } from 'react-bootstrap'

const Product = () => {
  const [data, setdata] = useState([])
  const [page, setpage] = useState(1)
  const [selectcategory, setselectcategory] = useState(null)
  const [order, setorder] = useState(null)

  const fetchdata = () => {
    axios.get(`http://localhost:3000/product`, {
      params: {
        _page: page,
        _limit: 10,
        category: selectcategory,
        _sort: "price",
        _order: order
      }
    })
      .then((res) => { setdata(res.data) })
      .catch((err) => console.log(err))
  }

  const handledelete = (id) => {
    axios.delete(`http://localhost:3000/product/${id}`)
      .then((res) => {
        alert("product deleted")
        fetchdata()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchdata()
  }, [page, selectcategory, order])

  return (
    <div>
      <Navbar />
      <Container>
        <div className="d-flex justify-content-between pb-4 pt-3">
          <div className="">
            <button onClick={() => setorder("asc")}>lowtohigh</button>
            <button className='ms-2' onClick={() => setorder("desc")}>hightolow</button>
          </div>
          <select name="" id="" onChange={(e) => setselectcategory(e.target.value)}>
            <option value="">Select your category</option>
            <option value="men's clothing">Men</option>
            <option value="jewelery">jewelery</option>
            <option value="women's clothing">Women</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
      </Container>

      <div className="d-flex flex-wrap">
        {
          data.map((el) => (
            <div className="col-3" key={el.id} >
              <img src={el.image} alt="" className='h-50 w-75' />
              <h5>{el.title}</h5>
              <p>{el.price}</p>
              <p>{el.description.substring(0, 100)}</p>
              <p>{el.category}</p>
              <Link to={`/edit/${el.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => { handledelete(el.id) }}>Delete</button>
            </div>
          ))
        }
      </div>
      <div className="text-center mt-5">
        <button onClick={() => setpage(page - 1)} disabled={page <= 1}>-1</button>
        <span>{page}</span>
        <button onClick={() => setpage(page + 1)}>+1</button>
      </div>
    </div>
  )
}

export default Product
