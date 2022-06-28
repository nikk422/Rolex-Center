import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { UserProvider } from "./context/ProductContext";
import { CategoryContextProvider } from "./context/categoryContext";
import { WishlistAndCartProvider } from "./context/wishlistCartContext";
import {AuthProvider} from "./context/AuthContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistAndCartProvider>
        <CategoryContextProvider>
          <UserProvider>
          <AuthProvider>
            <App />
            </AuthProvider>
          </UserProvider>
        </CategoryContextProvider>
      </WishlistAndCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
