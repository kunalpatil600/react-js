import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Accordion } from 'react-bootstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Description = () => {
    const [singlePageData, setSinglePageData] = useState(null)
    const [data3, setdata3] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/product1/${id}`)
            .then((res) => {
                setSinglePageData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(`http://localhost:3000/product2/${id}`)
            .then((res) => {
                setSinglePageData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(`http://localhost:3000/product3/${id}`)
            .then((res) => {
                setSinglePageData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(`http://localhost:3000/product4/${id}`)
            .then((res) => {
                setSinglePageData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(`http://localhost:3000/product4Rainwear/${id}`)
            .then((res) => {
                setSinglePageData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(`http://localhost:3000/product4top/${id}`)
            .then((res) => {
                setSinglePageData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get(`http://localhost:3000/newproduct/${id}`)
            .then((res) => {
                setSinglePageData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [id])
    const handleAddToCart = () => {
        if (singlePageData) {
          axios.post("http://localhost:3000/cart", singlePageData)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        } else {
          console.log("No data available to add to cart");
        }
      };

    const [selectedSize, setSelectedSize] = useState('LG');
    axios.get("http://localhost:3000/product3").then((res) => { setdata3(res.data) })
    const sizes = ['SM', 'MD', 'LG', 'XL', '2X'];
    return (
        <div>
            <Navbar />
            <div className="d-flex col-12  ">
                <div className="col-7">
                    <div className="d-flex flex-wrap justifycontent-between">
                        {singlePageData && (
                            <div key={singlePageData.id} >
                                <img src={singlePageData.image[0]} alt="" className='dataimg col-6 ps-3 mt-4' />
                                <img src={singlePageData.image[1]} alt="" className='dataimg col-6 ps-3  mt-4' />
                                <img src={singlePageData.image[2]} alt="" className='dataimg col-6 ps-3 mt-4' />
                                <img src={singlePageData.image[3]} alt="" className='dataimg col-6 ps-3 mt-4' />
                                <img src={singlePageData.image[4]} alt="" className='dataimg col-6 ps-3 mt-4' />
                                <img src={singlePageData.image[5]} alt="" className='dataimg col-6 ps-3 mt-4' />
                                <img src={singlePageData.image[6]} alt="" className='dataimg col-6 ps-3 mt-4' />
                                <img src={singlePageData.image[7]} alt="" className='dataimg col-6  ps-3 mt-4' />

                            </div>
                        )}
                    </div>
                </div>
                <div className="col-5 mt-5 ps-5 ">
                    {singlePageData && (
                        <div key={singlePageData.id} >
                            <h2 className='text-trans m-0 '>{singlePageData.title}</h2>
                            <p className='fs-5 m-1'>{singlePageData.title2}</p>
                            <p className=' fs-5'><i class="bi bi-star-fill"></i>&nbsp;<i class="bi bi-star-fill"></i>&nbsp;<i class="bi bi-star-fill"></i>&nbsp;<i class="bi bi-star-fill"></i>&nbsp;<i class="bi bi-star-fill"></i></p>
                            <h2 className='fs-5'>${singlePageData.price}</h2>
                            <p className='mt-3'>4 interest-free payments of $32.48 with Klarna. Learn More</p>

                        </div>

                    )}
                    <div className="size-selector  mt-4">
                        <div className="sizes">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <div className="additional-text mt-3 ">Size : {selectedSize}</div>
                    </div>
                  
                        {/* <Link to={`/cart}`} style={{ textDecoration: "none" }}> */}
                        <button onClick={handleAddToCart}>
                            <button className="cssbuttons-io-button col-10 mt-5">
                                Add TO Cart
                                <div className="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </button>
                            </button>
                        {/* </Link> */}
                    
                    <div className="d-flex mt-3 col-11 justify-content-between" >
                        <div className="d-flex">
                            <img src="https://cdn11.bigcommerce.com/s-2nze2/images/stencil/original/image-manager/warranty-insulation-badges-life-warranty-icon.png" className='col-3' alt="" />
                            <p className='pt-3  '> <u>Lifetime Warranty </u></p>
                        </div>
                        <div className="d-flex " >
                            <img src="https://cdn11.bigcommerce.com/s-2nze2/images/stencil/original/image-manager/warranty-insulation-badges-sierraloft-icon.png" className='col-2' alt="" />
                            <p className='pt-3 ms-2 '> <u>SierraLoft Synthetic Insulation </u></p>
                        </div>
                    </div>
                    <p className='col-10 mt-5'>Based on our best-selling Cloud sleeping bag, the Night Cap 20 is a more affordable, responsibly-made version of its award-winning sibling for off-the-grid adventure seekers who need a better insurance policy in wet weather while still packing down to a backpack-friendly size. Made with 100% recycled synthetic insulation from water bottles and wrapped in a recycled, post-industrial fabric shell, the Night Cap 20 integrates a zipperless, oversized comforter and a sleeping pad sleeve for a bed system that’s as cozy as home and offers more freedom for stretching out than traditional mummy bags. Loads of features ensure warm air doesn’t escape, like insulated shoulder</p>
                    <div className="">
                        <Accordion className='mt-5'>
                            <Accordion.Item eventKey="1" className='mt-2' style={{ border: "none" }}>
                                <Accordion.Header > <span className='fw-bold'>SPECS (REGULAR)  </span></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Patented zipperless design for the ultimate comfort</li>
                                        <li>Oversized integrated comforter gives you all the comforts of your bed at home</li>
                                        <li>Insulated shoulder pockets keep comforter wrapped around you and seals out drafts</li>
                                        <li>Patented self-sealing foot vent provides fast and easy ventilation</li>
                                        <li>Integrated sleeping pad sleeve keeps pad under you for comfort and warmth</li>
                                        <li>Hood cinch to keep in heat when the temps drop</li>
                                        <li>Recycled materials reduce environmental impact</li>
                                        <li>ISO tested</li>
                                        <li>Stuff sack included for easy pack up and transport</li>
                                    </ul>
                                </Accordion.Body>
                                <hr className='m-0' />
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='mt-2' style={{ border: "none" }}>
                                <Accordion.Header > <span className='fw-bold'>FEATURES   </span></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Liner: 20D Recycled Polyester</li>
                                        <li>Shell: 20D Recycled Polyester</li>
                                        <li>Insulation: SierraLoft Eco Synthetic</li>
                                    </ul>
                                </Accordion.Body>
                                <hr className='m-0' />
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='mt-2' style={{ border: "none" }}>
                                <Accordion.Header > <span className='fw-bold'>MATERIALS   </span></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Temperature Rating: 20°F / -6.67°C</li>
                                        <li>ISO Comfort Rating: 34°F / -1.6°C</li>
                                        <li>ISO Limit Rating: 23°F / -5°C</li>
                                        <li>Weight: 3 lb / 1.37 kg</li>
                                        <li>Fill Weight: 40 oz / 1133.98 g</li>
                                        <li>Fits To: 72" / 182.88 cm</li>
                                        <li>Length: 78" / 198.12 cm</li>
                                        <li>Shoulder Circumference: 60" / 147.32 cm</li>
                                        <li>Stuff Sack Size: 7.5 x 15 in / 19 x 38 cm</li>

                                    </ul>
                                </Accordion.Body>
                                <hr className='m-0' />
                            </Accordion.Item>
                        </Accordion>

                    </div>

                </div>
            </div>
            <div className="mt-5 pt-4">
                <h1 className='fw-bold ms-5 ps-5  d-inline'>NEW ARRIVALS   </h1> <span className='fw-bold'>/ SHOP ALL</span>
            </div>
            <div className="d-flex w-90 ms-5 pb-4  mb-5 ps-4 slider-slide " style={{ overflowX: "scroll" }}>
                {
                    data3.map((el) => (
                        <div className='marl ms-4 mt-5 ' key={el.id}>
                            {/* <Link to={`/description/${el.id}`}>    */}
                            <div className="products-images-main">
                                <img src={el.image[0]} alt="" className='sliderimg2 col-12' />
                                <div className="products-images text-center w-100 h-100">
                                    <img src={el.hover} alt="" className='sliderimg' />
                                </div>
                            </div>
                            {/* </Link> */}
                            <div className="d-flex pb-2 mt-2 justify-content-between col-12">
                                <h4 className='d-inline fw-bold'>{el.title}</h4>
                                <h5 className='d-inline'>${el.price}</h5>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Footer />
        </div>
    )
}

export default Description
