import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivatePage = ({children}) => {
 const {user}=useContext(AuthContext)
     console.log(user)
      if(!user){
        return <Navigate to={"/login"}/>
      }
      return children
};

export default PrivatePage;
