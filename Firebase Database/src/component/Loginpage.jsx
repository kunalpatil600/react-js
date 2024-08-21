import React from 'react'
import Navbar from './Navbar'
import GoogleButton from 'react-google-button'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
const Loginpage = () => {
    const [user] = useAuthState(auth);

    const handleLogin = () => {
      signInWithPopup(auth, provider)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
  return (
    <div>
      <Navbar/>
      <div className="mt-5 pt-5">
      <GoogleButton className='' onClick={handleLogin}/>
      </div>
      {user && (
        <div className="user-info mt-5 text-center">
              <img src={user.photoURL} alt="User Avatar" style={{borderRadius:"50%"}} />
          <h2 >Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  )
}

export default Loginpage