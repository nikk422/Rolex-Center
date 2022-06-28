import "./homePage.css";
import { GenreProduct } from "../Components/genre/GenreProduct";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="home-image">
        <img src="https://wristadvisor.com/wp-content/uploads/2022/03/Rolex-Day-Date-40-Ice-Blue-Dial-1.jpg" alt="homePage" className="image-responsive margin-1r" />
        <div className="shop-btn">
          <h2>
            Welcome To Rolex watch Gallery Here many types of Rolex watches
            according to your choice
          </h2>
          <button className="shopingBtn">
            <Link to="/Product">SHOP NOW</Link>
          </button>
        </div>
      </div>
      <GenreProduct />
    </div>
  );
}
