
// This React application integrates Firebase for Google Sign-In authentication 
// and displays products fetched from an API. It initializes Firebase with a
//  given configuration, sets up authentication with Google as the provider, 
//  and allows users to sign in using Google. After signing in, the user's details
//   are displayed on the login page. The Productpage fetches and displays products
//    from a fake store API, and routing is handled using React Router to navigate between pages.
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