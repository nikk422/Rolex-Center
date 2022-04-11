import "./wishlistListing.css";
import { useWishlistCart } from "../../context/wishlistCartContext";
import { Link } from "react-router-dom";

const RenderWishlist = () => {
  const {
    wishlistCartState: { wishlist, cart },
    dispatchWishlistCart,
  } = useWishlistCart();
  return (
    <div>
      <h2>My wishlist ({wishlist.length})</h2>
      <Link to="/Product">
        <button class="shop-now">SHOP NOW</button>
      </Link>
      <div className="product-cate">
        {wishlist.map((item) => {
          return (
            <div className="pro-cat">
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
                  onClick={() =>
                    dispatchWishlistCart({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item,
                    })
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
                  <button class="cartBtn goCart">Move to Cart</button>
                </Link>
              ) : (
                <button
                  onClick={() =>
                    dispatchWishlistCart({ type: "ADD_TO_CART", payload: item })
                  }
                  className="CartBtn  addCart headHover"
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
