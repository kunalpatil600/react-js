import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/cart`)
      .then((res) => {
        setData(res.data); // Fetch the data and set it to state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Function to handle quantity changes without Math.max
  const handleQuantityChange = (index, change) => {
    const newData = [...data];
    const newQuantity = (newData[index].quantity || 1) + change;
    
    // Ensure quantity doesn't go below 1
    if (newQuantity > 0) {
      newData[index].quantity = newQuantity;
      setData(newData);
    }
  };

  // Function to remove an item by setting it to null
  const handleRemoveItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1); // Remove the item from the array
    setData(newData);
  };

  return (
    <div>
      <Navbar />
      <h1 className='fw-bold pt-5 text-center'>Your Cart</h1>
      <div className='col-8 d-flex m-auto'>
        <span className='col-7'>Item</span>
        <span className='col-1'>Price</span>
        <span className='col-1 ms-5'>Quantity</span>
        <span className='col-1 ms-5'>Total</span>
        <span className='col-1'>Remove</span>
      </div>
      <hr className='m-auto col-8' />
      <div className="col-8 m-auto">
        <div className='mt-3'>
          {data.map((el, index) => (
            <div className='d-flex mt-4' key={index}>
              <img src={el.image[0]} alt="" className='col-2' />
              <div className="col-5 ms-4">
                <h3>{el.title}</h3>
                <span className='fs-5 d-block'><b>Size :</b> SM</span>
                <span className='fs-5'><b>Color :</b> Black</span>
              </div>
              <span className='fs-5 col-1'>${el.price}</span>
              <div className="counter">
                <div className="d-flex ms-3">
                  <button onClick={() => handleQuantityChange(index, -1)}>-1</button>
                  <h5>{el.quantity || 1}</h5>
                  <button onClick={() => handleQuantityChange(index, 1)}>+1</button>
                </div>
              </div>
              <span className='fs-5 col-1'>${(el.price * (el.quantity || 1)).toFixed(2)}</span>
              <button className='col-1' onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
