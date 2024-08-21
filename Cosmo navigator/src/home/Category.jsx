
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../component/Navbar';
import '../home/Category.css'
import Footer from '../component/Footer'
import { Container } from 'react-bootstrap';

const Category = () => {
  const { category } = useParams(); 
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const fetchData = (category) => {
    axios.get(`http://localhost:3000/product4`, {
      params: { category }
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
     axios.get(`http://localhost:3000/product4Rainwear`,{
      params: { category }
    })
      .then((res) => setData2(res.data))
      .catch((err) => console.log(err))
      axios.get(`http://localhost:3000/product4top`,{
        params:{category}
      })
      .then((res)=>setData3(res.data))
      .catch((err)=>console.log(err))
    };
  

  useEffect(() => {
    if (category) {
      fetchData(category);
    }
  }, [category]);

  return (
    <div>
      <Navbar/>
      <div>
        <img src="https://sierradesigns.com/images/stencil/original/image-manager/default-plp.jpg" alt="" className="col-12 imagecategory" />
      </div>
      <div>
        <div className="col-11 m-auto mt-5  pt-3">
       <h3 className='fw-bold '>JACKETS & VESTS </h3>
       <p>No matter the conditions, Sierra Designs men's jackets are ready for any adventure you can dream up. Innovative Fireball synthetic down and DriDown hydrophobic down help to battle the coldest conditions. All our men's jackets are state-of-the-art, functional, and look pretty damn good.</p>
       </div>
        <div className="d-flex flex-wrap col-11 col-lg-11 col-md-12 m-auto  justify-content-between">
      {
            data.map((el) => (
             
              <div className='marl3 mt-4' key={el.id}>
              <div className="">
                <Link to={`/description/${el.id}`} className='col-sm-1'>
                <div className="products-images-main3">
                  <img src={el.image} alt="" className='sliderimg23 ' />
                  <div className="products-images w-100 h-100" >
                    <img src={el.hover} alt="" className='sliderimg5 ' />
                  </div>
                </div>
                </Link>
                <div className=" pb-2 mt-2 col-12">
                  <h5 className=' fw-bold'>{el.title}</h5>
                  <h5 className=''>${el.price}</h5>
                  <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></p>
                </div>
              </div>
             </div>
            ))
          }
 </div>
 <h2 className='fw-bold fs-3 ms-5 ps-3 mt-5'> WIND & RAINWEAR </h2>
 <div className="d-flex flex-wrap  justify-content-between col-lg-11  m-auto ">
      {
            data2.map((el) => (
             
              <div className='marl3  mt-4' key={el.id}>
              <div className="">
                <Link to={`/description/${el.id}`}>
                <div className="products-images-main3">
                  <img src={el.image} alt="" className='sliderimg23' />
                  <div className="products-images w-100  h-100" >
                    <img src={el.hover} alt="" className='sliderimg5 ' />
                  </div>
                </div>
                </Link>
                <div className="  mt-2 col-12">
                  <h5 className=' fw-bold'>{el.title}</h5>
                  <h5 className=''>${el.price}</h5>
                  <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></p>
                </div>
              </div>
             </div>
            ))
          }
 </div>
 <h2 className='fw-bold fs-3 ms-5 ps-3 mt-5'> TOP </h2>
 <div className="d-flex flex-wrap    col-11 col-md-12 m-auto col-lg-11 justify-content-between">
      {
            data3.map((el) => (
             
              <div className='marl3 mt-4 ' key={el.id}>
              <div className="">
                <Link to={`/description/${el.id}`}>
                <div className="products-images-main3">
                  <img src={el.image} alt="" className='sliderimg23 '  />
                  <div className="products-images w-100 h-100" >
                    <img src={el.hover} alt="" className='sliderimg5 ' />
                  </div>
                </div>
                </Link>
                <div className=" pb-2 mt-2 col-12">
                  <h5 className=' fw-bold'>{el.title}</h5>
                  <h5 className=''>${el.price}</h5>
                  <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></p>
                </div>
              </div>
             </div>
            ))
          }
 </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Category;
