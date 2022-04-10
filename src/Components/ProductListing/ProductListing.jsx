import React from "react";
import { useProductContext } from "../../context/ProductContext";
import { useWishlistCart } from "../../context/wishlistCartContext";
import { Link } from "react-router-dom";

const GetProduct = () => {
  const {
    wishlistCartState: { wishlist, cart },
    dispatchWishlistCart,
  } = useWishlistCart();
  const {
    products,
    productState: {
      sort,
      byStock,
      byFastDelivery,
      bySearch,
      byHomeDelivery,
      byRating,
      byRange,
      categories,
    },
  } = useProductContext();
  const transFormProduct = () => {
    let sortedProd = products;

    if (sort) {
      sortedProd = sortedProd.sort((a, b) =>
        sort === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
      );
    }
    if (byStock) {
      sortedProd = sortedProd.filter((prod) => prod.stock);
    }

    if (byFastDelivery) {
      sortedProd = sortedProd.filter((prod) => prod.delivery);
    }

    if (byRating) {
      sortedProd = sortedProd.filter((prod) => prod.rating >= byRating);
    }

    if (bySearch) {
      sortedProd = sortedProd.filter((prod) =>
        prod.Brand.toLowerCase().includes(bySearch)
      );
    }
    if (byHomeDelivery) {
      sortedProd = sortedProd.filter((prod) => prod.Brand === byHomeDelivery);
    }

    if (byRange) {
      sortedProd = sortedProd.filter((prod) => prod.price >= byRange);
    }
    if (categories[0] !== undefined) {
      sortedProd = sortedProd.filter((prod) => categories.includes(prod.Brand));
    }
    return sortedProd;
  };
  return (
    <div className="product-cate">
      {transFormProduct().map((item) => (
        <div className="pro-cat">
          <img src={item.Image} alt="product" className=" img-pro" />

          <p className="pro-name">{item.Brand}</p>
          <div className="features">
            <p>{item.stock ? <div>InStock</div> : <div>Out Of Stock</div>}</p>
            <p>
              {item.delivery ? <div>FastDelivary</div> : <div>3-4 Days</div>}
            </p>
            <p className="rating">Rating {item.rating}</p>
          </div>
          <h3>
            ₹{item.price}
            <small className="discount-off">₹{item.discount}</small>
          </h3>
          {wishlist.some((data) => data.id === item.id) ? (
            <button
              className="Added-Btn"
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
              className="heart-Btn"
              onClick={() =>
                dispatchWishlistCart({ type: "ADD_TO_WISHLIST", payload: item })
              }
              className="heart black-heart"
            >
              <i style={{ fontSize: "27px" }} class="fa">
                &#10084;
              </i>
            </button>
          )}
          {cart.some((data) => data.id === item.id) ? (
            <Link to="/MyCart" className="Added-cart-Btn">
              <button className="CartBtn goCart ">Go to Cart</button>
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
      ))}
    </div>
  );
};

export { GetProduct };
