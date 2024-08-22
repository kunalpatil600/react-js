// This React app handles user authentication using Firebase.It allows users 
// to sign up or log in with email/password or Google,and only authenticated
//  users can access the product page, which displays items fetched from a 
//   fake store API. The Privetpage component protects routes, redirecting 
//  users to the login page. The Allroutes component defines the app's navigation.
import React, { useState } from 'react';
import Navbar from './Navbar';
import GoogleButton from 'react-google-button';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
const Loginpage = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('User signed up:', res);
        alert('User signed up:', res)
      })
      .catch((err) => console.log(err.message),
        alert("pls check our email or password")
      );
  };

  // Email/Password Login
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('User logged in:', res);
        alert('User logged in:', res)
      })
      .catch((err) => console.log(err.message));
    alert("pls try")
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((res) => alert(" Sign-out successful."))
      .catch((err) => alert("An error happened"))
  }
  return (
    <div>
      <Navbar />
      <div className="mt-5 pt-5 text-center">
        <GoogleButton className='' onClick={handleGoogleLogin} />

        <div className="mt-4">
          <h3>{isNewUser ? 'Sign Up' : 'Log In'} with Email</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control my-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control my-2"
          />
          {isNewUser ? (<button className="btn btn-primary" onClick={handleSignup}>Sign Up</button>) : (<button className="btn btn-primary" onClick={handleLogin}>Log In</button>
          )}
          <div className="mt-3">
            <p onClick={() => setIsNewUser(!isNewUser)} style={{ cursor: 'pointer' }}>
              {isNewUser ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
            </p>
          </div>
        </div>
      </div>

      {user && (
        <div className="user-info mt-5 text-center">
          <img src={user.photoURL} alt="User Avatar" style={{ borderRadius: "50%" }} />
          <h2>Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
      <div>
        <button onClick={handleSignOut}>logout</button>
      </div>
    </div>
  );
};

export default Loginpage;
