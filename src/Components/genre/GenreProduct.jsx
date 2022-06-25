import { v4 as uuid } from "uuid";

import rolex1 from "../../assets/rolex11.jpg";
import rolex2 from "../../assets/rolex12.jpg";
import rolex5 from "../../assets/rolex13.jpg";
import rolex6 from "../../assets/rolex14.jpg";
import rolex7 from "../../assets/rolex10.jpg";

import {Link} from "react-router-dom";
import {useProductContext} from "../../context/ProductContext";

 const product = [

  {
    id: uuid(),
    ProductImage: rolex1,
    productName:"AIR-KING"
  },
  {
    id: uuid(),
    ProductImage: rolex2,
    productName:"GMT-MASTER"
  },
  {
    id: uuid(),
    ProductImage: rolex5,
    productName:"YACHT-MASTER"
  },
  {
    id: uuid(),
    ProductImage: rolex6,
    productName:"SEA-DWELLER"
  },
  {
    id: uuid(),
    ProductImage: rolex7,
    productName:"MILGAUSS"
  },
];

export const GenreProduct = () => {
  const {productDispatch}=useProductContext();

  return (
    <div className="product-cate flex flex-wrap margin-top-16p flex-center positon-relative gap-2r">
      {product.map((item) => 
        <Link to="/Product">
        <div className="genre-cat" onClick={() => productDispatch({type:"CATEGORY",payload:item.productName})}>
          <img src={item.ProductImage} alt="product" className=" img-res" />
          <p className="pro-name">{item.productName}</p>
        </div>
        </Link>
      )}
    </div>
  );
};
