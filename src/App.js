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
import { Footer } from "./Components/footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element ={<HomePage/>}/>
      <Route path="/Login" element ={<Login/>}/>
      <Route path="/SignUp" element ={<SignUp/>}/>
      <Route path="/Product" element ={<Product/>}/>
      <Route path="/MyCart" element ={<MyCart/>}/>
      <Route path="/Wishlist" element ={<Wishlist/>}/>
    </Routes>
    <ToastContainer/>
    <Footer />
      </div>
  );
}

export default App;


