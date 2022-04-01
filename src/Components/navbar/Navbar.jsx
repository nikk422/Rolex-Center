import "./navbar.css";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
          <ul className="header-container">
            <li className="heading headHover">Rolex watch store</li>
            <li className="search-bar">
              <input  type="search" placeholder="search here.."></input>
            </li>
            <div className="nav-icons">
                <li><Link to="/Login"><i className="fa fa-user headHover"></i></Link></li>
                <li><Link to="/Wishlist" ><i className="fa fa-heart headHover"></i><span className="items-badge">2</span></Link></li>
                <li><Link to="/MyCart" ><i className="fa fa-shopping-cart headHover"></i><span className="items-badge">2</span></Link></li>
            </div>
          </ul>
      </nav>
    </div>
  );
};
