import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import axios from 'axios';
import "../home/New.css";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer'

const New = () => {
  const [showButton, setShowButton] = useState(true);
  const [data, setData] = useState([]);
  const [selectCategory, setSelectCategory] = useState(undefined);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  const fetchData = () => {
    axios.get('http://localhost:3000/newproduct', {
      params: {
        _page: page,
        _limit: 10,
        category: selectCategory,
        _sort: 'price',
        _order: order
      }
    })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, [page, selectCategory, order]);

  return (
    <div>
      <Navbar />
      <img
        src="https://sierradesigns.com/images/stencil/original/image-manager/default-plp.jpg"
        alt="Banner"
        className='col-12'
      />
      <div className="container d-flex mt-3 " style={{justifyContent:"end"}}>
      <div class="toggle-switch ">
  <input class="toggle-input" id="toggle" type="checkbox" onClick={toggleButton} /> 
  <label class="toggle-label" for="toggle"></label>
</div>
    <span className='mt-1 ms-2 fw-bold'>HIDE FILTERS</span>
      </div>
      <div className="d-flex ">
        {showButton && <div className="col-3 mt-5">

          <Accordion className='col-10 m-auto'>

            <Accordion.Item eventKey="0" style={{ border: "none" }}>
              <Accordion.Header ><span className='fw-bold'>PRICE</span> </Accordion.Header>
              <Accordion.Body>
                <div>
                  <button onClick={() => setOrder('asc')} className='pricebtn'>Low to High</button>
                  <button className='ms-2 pricebtn' onClick={() => setOrder('desc')} >High to Low</button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <hr className='m-0' />
            <Accordion.Item eventKey="9" className='mt-2' style={{ border: "none" }}>
              <Accordion.Header className='fw-bold'><span className='fw-bold'>AWAED WINNER</span></Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <label class="custom-checkbox">
                    <input name="dummy" value="Awardwinner" onChange={(e) => setSelectCategory(e.target.value)} type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <span className='fw-bold '>Award Winner</span></div>
              </Accordion.Body>

            </Accordion.Item >
            <hr className='m-0' />
            <Accordion.Item eventKey="1" className='mt-2' style={{ border: "none" }}>
              <Accordion.Header > <span className='fw-bold'>GENDER  </span></Accordion.Header>
              <Accordion.Body>
                <div className="mb-3">
                  <label class="custom-checkbox">
                    <input name="dummy" value="men's clothing" onChange={(e) => setSelectCategory(e.target.value)} type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <span className='fw-bold '>Men</span></div>
                <div className="mb-3">
                  <label class="custom-checkbox">
                    <input name="dummy" value="unisex" onChange={(e) => setSelectCategory(e.target.value)} type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <span className='fw-bold '>Unisex</span></div>
              </Accordion.Body>
              <hr className='m-0' />
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='mt-2' style={{ border: "none" }}>
              <Accordion.Header className='fw-bold'><span className='fw-bold'>INSULATION </span></Accordion.Header>
              <Accordion.Body>
              <div class="loader"></div>
              </Accordion.Body>
              <hr className='m-0' />
            </Accordion.Item>
          </Accordion>
        </div>}
        <div className="" >
          <div className=" d-flex justify-content-between mt-5 flex-wrap mb-5 pb-5 col-12" style={{transition:"1s"}}>
            {
              data.map((el) => (

                <div className='marl2  mb-5 ' key={el.id}>
                  <div className="">
                  <Link to={`/description/${el.id}`}>
                    <div className="products-images-main2 ">
                      <img src={el.image} alt="" className='sliderimg3 ' />
                      <div className="products-images w-100 h-100 " >
                        <img src={el.hover} alt="" className='sliderimg4 ' />
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
      </div>
      <div className="text-center mt-5 ">
        <button onClick={() => setPage(page - 1)} disabled={page <= 1} className='pricebtn'>Previous</button>
        <span className='fs-5 ps-2 pe-2 fw-bold'>{page}</span>
        <button onClick={() => setPage(page + 1)} className='pricebtn'>Next</button>
        
      </div>
      <Footer/>
    </div>
  );
};

export default New;
