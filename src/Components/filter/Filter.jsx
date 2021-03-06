import "./filter.css";
import { useProductContext } from "../../context/ProductContext";

export const Filter = () => {

    const proCategory = [
        "AIR-KING","YACHT-MASTER","DATE-JUST","GMT-MASTER","DIAMOND","DAY-DATE","SEA-DWELLER","MILGAUSS","OYSTER"
    ]

    const {productState:{byRange,categories,byFastDelivery,byStock,sort},productDispatch}=useProductContext();
  return (
    <main class="main-container flex">
      <div class="filter-container flex-column">
        <div class="filter flex-justify-between">
          <p class="headHover">Filters</p>
          <button onClick={()=>{productDispatch({type:"CLEAR"})}} class="clearBtn headHover">Clear</button>
        </div>
        <p class="headHover">
          <strong> Price </strong>
        </p>
        <div class="price-range flex-justify-between">
          <p>2k</p>
          <p>{byRange}</p>
          <p>183k</p>
        </div>
        <input
        checked={byRange}
          type="range"
          min="500"
          max="1897"
          onChange={(e)=>{productDispatch({type:"RANGE",payload:e.target.value})}}
          class="range"
        ></input>
        <div class="cat">
          <p>
            <strong> Category </strong>
          </p>
          {proCategory.map(prod=>{
              return (
                  <div class="category" key={prod}>
                  <input checked={categories.includes(prod)} type="checkbox"  onChange={() => productDispatch({type:"CATEGORY",payload:prod})}></input>
                      <label className="lable">{prod}</label>
                  </div>
              )
          })}
          <p>
            <strong>Availability</strong>
          </p>
          <div className="category flex">
            <input type="checkbox" checked={byFastDelivery} onChange={()=>{productDispatch({type:"FILTER_BY_DELIVERY"})}}  className="category-type"></input>
            Fast Delivery
          </div>
          <div className="category flex">
            <input type="checkbox" checked={byStock} onChange={()=>{productDispatch({type:"FILTER_BY_STOCK"})}}  className="category-type"></input>
            Instock
          </div>
        </div>

        <div className="rating">
          <p>
            <strong> Rating </strong>
          </p>
          <div className="rating-point filter-lable flex">
            <input type="radio"   onChange={()=>{productDispatch({type:"RATING",payload:"4"})}} name="rating" value="1" class="rating"></input>4
            Stars & above
          </div>
          <div  className="rating-point filter-lable flex">
            <input type="radio"  onChange={()=>{productDispatch({type:"RATING",payload:"3"})}}  name="rating" value="1" class="rating"></input>3
            Stars & above
          </div>
          <div className="rating-point filter-lable flex">
            <input type="radio"  onChange={()=>{productDispatch({type:"RATING",payload:"2"})}}  name="rating" value="1" class="rating"></input>2
            Stars & above
          </div>
          <div className="rating-point filter-lable flex">
            <input type="radio"  onChange={()=>{productDispatch({type:"RATING",payload:"1"})}}  name="rating" value="1" class="rating"></input>1
            Stars & above
          </div>
        </div>
        <div className="sort">
          <p>
            <strong> Sort by </strong>
          </p>
          <div className="sort-item filter-lable flex">
            <input type="radio" checked={sort} onChange={()=>{productDispatch({type:"SORT_BY_PRICE",payload:"LOW_TO_HIGH"})}} name="sort" value="1" class="sort-by"></input>
            Price-Low to High
          </div>
          <div className="sort-item filter-lable flex">
            <input type="radio" onChange={()=>{productDispatch({type:"SORT_BY_PRICE",payload:"HIGH_TO_LOW"})}}  name="sort" value="1" class="sort-by"></input>
            Price-High to Low
          </div>
        </div>
      </div>
     
    </main>
  );
};
