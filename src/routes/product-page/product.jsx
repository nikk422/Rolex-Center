import "./productListing.css";
import { Filter } from "../../Components/filter/Filter";
import { GetProduct } from "../../Components/ProductListing/ProductListing";

export default function Product() {
  return (
    <div className="product-contain">
      <Filter />
      <div className="showProd">
        <h4>
          Showing All Products <small>(Showing 20 Products)</small>
        </h4>
        <GetProduct />
      </div>
    </div>
  );
}
