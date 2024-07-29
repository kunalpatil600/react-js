import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  title: "",
  price: "",
  category: "men",
  description: "",
  image: ""
};

const AddProduct = () => {
  const [formData, setFormData] = useState(initialState);
  const { title, price, category, description, image } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/product", formData)
      .then((res) => {
        alert("Product added successfully!");
        setFormData(initialState);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </Form.Group>

          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={category}
              onChange={handleChange}
            >
              <option value="">Select your category</option>
              <option value="men's clothing">Men</option>
              <option value="jewelery">Jewelery</option>
              <option value="women's clothing">Women</option>
              <option value="electronics">Electronics</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddProduct;
