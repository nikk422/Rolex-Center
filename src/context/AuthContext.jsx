import React from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState({
    user: localStorage.getItem("user"),
    authToken: localStorage.getItem("authToken"),
  });


  // for login---------

  const LoginPage = async ({ email, password }) => {
    try{
      const { data, status } = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("authToken", data.encodedToken);
      localStorage.setItem("user", data.foundUser.firstName);
      setLogin({...login,user:data.foundUser.firstName});

      if (status === 200){
          toast.success(`Welcome Back ${data.foundUser.firstName}`)
      }

  } catch (err){
      console.log(err);
      toast.error("Failed To Login")
  }
  };

  // for signup---------

  const SignupPage = async ({firstName, lastName, email, password}) => {
    try{
        const { data, status } = await axios.post("/api/auth/signup",
        {
            firstName,
            lastName,
            email,
            password
        }
        );
        localStorage.setItem("authToken", data.encodedToken);
        localStorage.setItem("user", data.createdUser.firstName);
        setLogin({...login,user:data.createdUser.firstName});

        if (status === 201){
            toast.success(`Welcome ${data.createdUser.firstName}`)
        }
    } catch (err) {
        console.log(err)
        toast.error("Failed To Singup")
    }
};

// for logout-------

const logoutHandler = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  setLogin({...login, user:false});
  toast.info("Successfully Logout..")
};




  return (
    <AuthContext.Provider value={{ LoginPage,SignupPage,logoutHandler, login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
