import React from 'react';
import { createContext, useContext,useState } from 'react';

const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [login , setLogin]=useState(false)
  return (
    <AuthContext.Provider value={{login, setLogin}}>
        {children}
    </AuthContext.Provider>
  )
}

const useAuth=()=>useContext(AuthContext);

export {useAuth,AuthProvider}