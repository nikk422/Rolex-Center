import "./wishlistListing.css";
import { useWishlistCart } from "../../context/wishlistCartContext";
import { Link } from "react-router-dom";
import {toast} from"react-toastify";
  

const RenderWishlist = () => {
  const {
    wishlistCartState: { wishlist, cart },
    dispatchWishlistCart,
  } = useWishlistCart();



  return (
    <div>
      <div className="centerHead">
        <h2>My wishlist ({wishlist.length})</h2>
        <Link to="/Product">
          <button  className="shop-now">SHOP NOW</button>
        </Link>
      </div>
      <div className="product-cate flex flex-wrap margin-top-16p flex-center positon-relative gap-2r">
        {wishlist.map((item) => {
          return (
            <div className="pro-cat padding-16p positon-relative">
              <img src={item.Image} alt="product" className=" img-pro" />

              <p className="pro-name">{item.Brand}</p>
              <div className="features">
                <p>
                  {item.stock ? <div>InStock</div> : <div>Out Of Stock</div>}
                </p>
                <p>
                  {item.delivery ? (
                    <div>FastDelivary</div>
                  ) : (
                    <div>3-4 Days</div>
                  )}
                </p>
                <p className="rating">Rating {item.rating}</p>
              </div>
              <h3>
                ₹{item.price}
                <small className="discount-off">₹{item.discount}</small>
              </h3>
              {wishlist.some((data) => data.id === item.id) ? (
                <button
                  onClick={() =>{return(
                    dispatchWishlistCart({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item,
                    }),
                    toast.error("Remove to Wishlist",{position: "top-right"})
                    )}
                  }
                  className=" heart red-heart"
                >
                  <i style={{ fontSize: "27px" }} class="fa">
                    &#10084;
                  </i>
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatchWishlistCart({
                      type: "ADD_TO_WISHLIST",
                      payload: item,
                    })
                  }
                  className="heart black-heart"
                >
                  <i style={{ fontSize: "27px" }} class="fa">
                    &#10084;
                  </i>
                </button>
              )}

              {cart.some((data) => data.id === item.id) ? (
                <Link to="/MyCart">
                  <button class="cartBtn goCart font-16p">Move to Cart</button>
                </Link>
              ) : (
                <button
                  onClick={() =>
                    dispatchWishlistCart({ type: "ADD_TO_CART", payload: item })
                  }
                  className="CartBtn  addCart headHover font-16p"
                >
                  Add To Cart 🛒
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { RenderWishlist };
