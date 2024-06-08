import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Componants/LoginAuth'

function LoginSignup() {
    let {logout} = useContext(AuthContext)
    let saveDetails = JSON.parse(localStorage.getItem("userDetail")) 
    let auth = localStorage.getItem("isAutho")
  return (
    <>
      {
        !saveDetails ? (<Link to="/signup">Sign Up</Link> ): auth!= "Authenticated" ? 
        (<Link to="/login">Login</Link> ) : (<button onClick={logout}>LogOut</button> )
      }
    </>
  )
}

export {LoginSignup}