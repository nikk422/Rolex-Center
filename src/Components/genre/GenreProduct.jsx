
import {Link} from "react-router-dom";
import {useProductContext} from "../../context/ProductContext";
import {useCategoryContext} from "../../context/categoryContext"


export const GenreProduct = () => {
 
  const {productDispatch}=useProductContext();
  const {category}=useCategoryContext()

  return (
    <div className="product-cate flex flex-wrap margin-top-16p flex-center positon-relative gap-2r">
      {category.map((item) => 
        <Link to="/Product">
        <div className="genre-cat" onClick={() => productDispatch({type:"CATEGORY",payload:item.categoryName})}>
          <img src={item.image} alt="product" className=" img-res" />
          <p className="pro-name">{item.categoryName}</p>
        </div>
        </Link>
      )}
    </div>
  );
};
