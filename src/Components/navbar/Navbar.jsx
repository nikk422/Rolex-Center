import "./navbar.css";
import {Link} from "react-router-dom";
import {useProductContext} from "../../context/ProductContext";
import {useWishlistCart} from "../../context/wishlistCartContext"
import {useAuth} from "../../context/AuthContext";

export const Navbar = () => {
  const { productDispatch}=useProductContext();
  const {wishlistCartState:{
    wishlist,cart}}=useWishlistCart();

    const {login  }= useAuth();

  return (
    <div className="navbar-container">
      <nav className="navbar">
          <ul className="header-container align-center flex-wrap ">
          <Link to="/">
          <li className="heading headHover">Rolex watch store</li>
              </Link>
            <li className="search-bar">
              <input onChange={(e)=>{productDispatch({type:"SEARCH",payload:e.target.value})}}  type="search" placeholder="search here.."></input>
            </li>
            <div className="nav-icons flex align-center flex-wrap ">
            {login.user ? (
             <li> <Link to="/logout">
              <i className="fa fa-user headHover"></i>
              </Link></li>
            ):(
              <li><Link to="/login">
              <i className="fa fa-user headHover"></i>
              </Link></li>
            )}
                <li><Link to="/Wishlist" ><i className="fa fa-heart headHover" ></i><span className="items-badge">{wishlist.length}</span></Link></li>
                <li><Link to="/MyCart" ><i className="fa fa-shopping-cart headHover"></i><span className="items-badge">{cart.length}</span></Link></li>
            </div>
          </ul>
      </nav>
    </div>
  );
};
