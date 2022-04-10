import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { UserProvider } from "./context/ProductContext";
import { CategoryContextProvider } from "./context/categoryContext";
import { WishlistAndCartProvider } from "./context/wishlistCartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistAndCartProvider>
        <CategoryContextProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CategoryContextProvider>
      </WishlistAndCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
