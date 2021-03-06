import "./App.css";
import "../src/styless/utility.css";
import {Routes,Route} from "react-router-dom";
import HomePage from "./routes/HomePage";
import Login from "./routes/authentication-page/login"
import { SignUp } from "./routes/authentication-page/sign-up";
import Product from "./routes/product-page/product";
import MyCart from "./routes/mycart-page/mycart"
import Wishlist  from "./routes/wishlist-page/wishlist";
import  {Navbar} from "./Components/navbar/Navbar";
import RequireAuth from "./private-auth/RequireAuth";
import { Footer } from "./Components/footer/Footer";
import Logout from "./routes/authentication-page/Logout"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./routes/CheckOut-page/Checkout";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element ={<HomePage/>}/>
      <Route path="/Login" element ={<Login/>}/>
      <Route path="/logout" element ={<Logout/>}/>
      <Route path="/SignUp" element ={<SignUp/>}/>
      <Route path="/Product" element ={<Product/>}/>
      <Route path="/checkout" element ={<Checkout/>}/>
      <Route path="/Wishlist" element={
      <RequireAuth>
        <Wishlist/>
      </RequireAuth>}/>
      <Route path="/MyCart" element={
      <RequireAuth>
        <MyCart/>
      </RequireAuth>}/>
    </Routes>
    <ToastContainer/>
    <Footer />
      </div>
  );
}

export default App;


