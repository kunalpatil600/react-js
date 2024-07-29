import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import Navbar from './Navbar';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let userdata={
      email,password
    }
    axios.post("https://reqres.in/api/login",userdata)
    .then((res)=>
        {
          
          let tokenfromre=res.data.token
          login(tokenfromre)
          console.log(login)
        })
    .catch((err)=>{console.log(err)})
   
  };

  return (
    <div className="">
      <Navbar/>
      <div className=" mt-5  pt-5">
    <form onSubmit={handleSubmit} className=''>
      <div className='text-center'>
        <label className=' d-block'>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} className=''
        />
      </div>
      <div className='text-center'>
        <label className='d-block'>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} className=''
        />
      </div>
      <button type="submit" className='mt-3 m-auto d-block fw-bold text-white' style={{backgroundColor:"blue", border:"none", borderRadius:"10px", padding:"3px 10px "}}>LOGIN</button>
    </form>
    <p>email:eve.holt@reqres.in</p>
    </div>
    </div>
  );
};

export default Login;
