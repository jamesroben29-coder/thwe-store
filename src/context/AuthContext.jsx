
import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState(() => {
        try{
            const data = localStorage.getItem("currentUser");
            return data ? JSON.parse(data) : null;

        }catch(error){
            return null;
        }
    });

    const userObject = {
        id : Date.now(),
        name : "",
        email : "",
        phone : "",
        address : "",
        password : ""
    }

    const signUp = (userData) => {
       const mergeData = { ...userObject , ...userData };

        if(userData){
            setCurrentUser(mergeData);
        }
        
        const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        const updatedUsers = [...existingUsers, mergeData];

        localStorage.setItem("registeredUsers" , JSON.stringify(updatedUsers));
    }

     const logOut = () => {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
     }

     const signIn = (email, password) => {
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));

        const user = registeredUsers.find((user) => 
            user.email === email && user.password === password
        );

        if(user){
            setCurrentUser(user);
            return true;
        }

        return false;
     }

    useEffect(() => {
        if(currentUser){
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
        }else{
          localStorage.removeItem("currentUser");
        }
    },[currentUser]);
    

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser , signUp, signIn, logOut }}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
};