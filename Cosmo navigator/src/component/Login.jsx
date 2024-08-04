import React from 'react';
import Navbar from './Navbar';
import GoogleButton from 'react-google-button';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../service/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
  const [user] = useAuthState(auth);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  console.log(user);
  
  return (
    <div>
      <Navbar />
      <h1 className='text-center fw-bold mt-5 pt-5'>SIGN IN</h1>
       <div className="col-2 mt-2  m-auto" >
        <GoogleButton onClick={handleLogin }  />
    </div>
      {user && (
        <div className="user-info mt-5 text-center">
              <img src={user.photoURL} alt="User Avatar" style={{borderRadius:"50%"}} />
          <h2 >Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
