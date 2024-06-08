import React from 'react'
import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext()

function LoginAuth({ children }) {
    let [eff, setEff] = useState(false)
   

    const [authDetails, setAuthDetails] = useState({
        isLoggedIn: false,
        email: "",
        password: "",
        name: ""
    });
    
    const login = ({email, password, name}) => {
        setAuthDetails({
            isLoggedIn: true,
            email: email,
            password: password,
            name: name

        });
    };

    useEffect(() => {
        const isAuth = localStorage.getItem("isAutho");
        if (isAuth == "Authenticated") {
            let saveDetails = JSON.parse(localStorage.getItem("userDetail")) || {}

            login({
                email: saveDetails.email,
                password: saveDetails.password,
                name: saveDetails.name
            })
        }
        
    }, [eff])

    const logout = () => {
        localStorage.setItem("isAutho", "NotAuthenticated")
        setAuthDetails({
            isLoggedIn: false,
            email: "",
            password: "",
            name: ""
        })
    };

    return (
        <AuthContext.Provider value={{ authDetails, login, logout, setEff, eff }}>
            {children}
        </AuthContext.Provider>
    )
}

export { LoginAuth }