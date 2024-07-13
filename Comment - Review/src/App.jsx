// // This JSX code defines the structure of the form and its elements.
// // Each input element is controlled by the React state (formData), 
// with their value attribute bound to the respective state property 
// and their onChange event handled by handleChange.// The form includes fields for name, 
// email, password, a dropdown for grade selection, and radio buttons for gender selection.
// // When the form is submitted, it triggers the handleSubmit function.
import React, { useState } from 'react';
let initialState = {
  name: "",
  email: "",
  password: "",
  grade: "",
  gender: ""
};

const App = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, grade, gender } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{textAlign:"center" }}>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        /> <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        /> <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        /> <br />
        <select name="grade" value={grade} onChange={handleChange}>
          <option value="">Select your grade</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select> <br />
        Male: <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={handleChange}
        />
        Female: <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleChange}
        /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
