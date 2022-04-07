import React from "react";
import { useProductContext } from "../../context/ProductContext";

const GetProduct = () => {
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
      categories
     
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
    if (categories[0]!==undefined){
      sortedProd = sortedProd.filter(prod => categories.includes(prod.Brand));
    }
    return sortedProd;
  };
  return (
    <div className="product-cate">
      {transFormProduct().map(
        ({ price, rating, Brand, Image, delivery,discount,stock }) => (
          <div className="pro-cat">
              <img src={Image} alt="product" className=" img-pro" />
              <button className="heart"><i style={{fontSize:"27px"}} class="fa">&#10084;</i></button>

            <p className="pro-name">{Brand}</p>
            <div className="features">
              <p>{stock ? <div>InStock</div> : <div>Out Of Stock</div>}</p>
              <p>{delivery ? <div>FastDelivary</div> : <div>3-4 Days</div>}</p>
              <p className="rating">Rating {rating}</p>
            </div>
            <h3>₹{price}<small className="discount-off">₹{discount}</small></h3>
            <button className="AddCartBtn headHover">Add To Cart 🛒</button>
          </div>
        )
      )}
    </div>
  );
};

export { GetProduct };
