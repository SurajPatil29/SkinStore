import { useContext } from "react";
import { Navigate } from 'react-router-dom'; 
import { AuthContext } from "./LoginAuth";
import React from 'react'

function PrivateRoutes({children}) {
    const { authDetails } = useContext(AuthContext);

    if (!authDetails?.isLoggedIn) {
      return <Navigate to="/login" />;
    }
  
    return children;
}

export default PrivateRoutes