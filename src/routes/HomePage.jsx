import "./homePage.css";
import { Navbar } from "../Components/navbar/Navbar";
import { Footer } from "../Components/footer/Footer";
import {Genre} from "../Components/genre/Genre";
import {GenreProduct} from "../Components/genre/GenreProduct";
import home from "../../src/assets/rolex8.jpg";
import {Link} from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Genre/>
      <div className="home-image">
        <img src={home} alt="homePage" className="image-responsive" />
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
      <GenreProduct/>
      <Footer />
    </div>
  );
}
