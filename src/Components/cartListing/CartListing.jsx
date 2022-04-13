import { useWishlistCart } from "../../context/wishlistCartContext";
import "./cartListing.css";
import { Link } from "react-router-dom";

const RenderCart = () => {
  const {
    wishlistCartState: { cart, wishlist },
    dispatchWishlistCart,
  } = useWishlistCart();

  let totalCartValue = 0;
  let totalCartItem = 0;
  if (cart[0] !== undefined) {
    totalCartValue = cart.reduce(
      (acc, curr) => acc + curr.price * curr.cartQ,
      0
    );
    console.log(totalCartValue);
    totalCartItem = cart.reduce(
      (acc, curr) => (curr.cartQ > 1 ? acc + (curr.cartQ - 1) : acc),
      0
    );
    totalCartItem = totalCartItem + cart.length;
    console.log(totalCartItem);
  }

  return (
    <div>
      <div className="centerHead">
        <h2>My Cart ({cart.length})</h2>
        <Link to="/Product">
          <button className="shop-now">SHOP NOW</button>
        </Link>
      </div>

      <div className="MyCart-container">
        <div className="cart-cate">
          {cart.map((item) => {
            return (
              <div className="pro-container">
                <div className="cart-img">
                  <img src={item.Image} className="img-pro" alt="poduct" />
                </div>
                <div className="cartItems">
                  <h4>New Rolex {item.Brand} watch</h4>
                  <h2>
                    ₹{item.price}
                    <small className="discount-off">₹{item.discount}</small>
                  </h2>
                  <div className="product-quantity">
                    <small>Quantity : </small>
                    <button
                      onClick={() =>
                        dispatchWishlistCart({
                          type: "INCREASE",
                          payload: item,
                        })
                      }
                      className="count-Btn"
                    >
                      +
                    </button>
                    <small className="count-num">{item.cartQ}</small>
                    <button
                      onClick={() =>
                        dispatchWishlistCart({
                          type: "DECREASE",
                          payload: item,
                        })
                      }
                      className="count-Btn"
                    >
                      -
                    </button>
                    <div className="btnContain">
                      <button
                        className="gowishlist"
                        onClick={() =>
                          dispatchWishlistCart({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          })
                        }
                      >
                        Remove from Cart
                      </button>

                      {wishlist.some((data) => data.id === item.id) ? (
                        <Link to="/wishlist">
                          <button className="gowishlist">Go to Wishlist</button>
                        </Link>
                      ) : (
                        <button
                          className="gowishlist  addCart "
                          onClick={() =>
                            dispatchWishlistCart({
                              type: "ADD_TO_WISHLIST",
                              payload: item,
                            })
                          }
                        >
                          Add to Wishlist
                        </button>
                      )}
                    </div>
                  </div>
                  {/* <div className="btnContain">
                    <button
                      className="gowishlist"
                      onClick={() =>
                        dispatchWishlistCart({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        })
                      }
                    >
                      Remove from Cart
                    </button>

                    {wishlist.some((data) => data.id === item.id) ? (
                      <Link to="/wishlist">
                        <button className="gowishlist">Go to Wishlist</button>
                      </Link>
                    ) : (
                      <button
                        className="gowishlist  addCart "
                        onClick={() =>
                          dispatchWishlistCart({
                            type: "ADD_TO_WISHLIST",
                            payload: item,
                          })
                        }
                      >
                        Add to Wishlist
                      </button>
                    )}
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="pro-detail">
          <h4>PRICE DETAILS</h4>
          <div class="price pro-contain">
            <p>ITEMS</p>
            <p>{totalCartItem}</p>
          </div>
          <div class="delivery pro-contain">
            <p>Delivery Charges</p>
            <p> ₹0</p>
          </div>
          <div class="total-amount pro-contain">
            <h3>TOTAL AMOUNT</h3>
            <h3>₹{totalCartValue}</h3>
          </div>
          <button class="orderBtn">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export { RenderCart };
