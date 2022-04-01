import "./App.css";
import {Routes,Route} from "react-router-dom";
import HomePage from "./routes/HomePage";
import Login from "./routes/authentication-page/login"
import Product from "./routes/product-page/product";
import MyCart from "./routes/mycart-page/mycart"
import Wishlist  from "./routes/wishlist-page/wishlist";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element ={<HomePage/>}/>
      <Route path="/Login" element ={<Login/>}/>
      <Route path="/Product" element ={<Product/>}/>
      <Route path="/MyCart" element ={<MyCart/>}/>
      <Route path="/Wishlist" element ={<Wishlist/>}/>
    </Routes>
      </div>
  );
}

export default App;


