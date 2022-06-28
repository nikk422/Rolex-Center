import "./productListing.css";
import { Filter } from "../../Components/filter/Filter";
import { GetProduct } from "../../Components/ProductListing/ProductListing";

export default function Product() {
  return (
    <div className="product-contain flex">
      <Filter />
      <div className="showProd margin-top-48p">
        <GetProduct />
      </div>
    </div>
  );
}
