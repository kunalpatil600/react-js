import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
const Privetpage = ({children}) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
   
    if(!user){
      return <Navigate to={"/login"}/>
    }
    else{
      return children
    }
  
}

export default Privetpage
