import { useState,useEffect } from "react";
import axios from "axios";

export const Genre=()=>{
    const [categories,setCategories] = useState([]);

    const fetchGenre=async ()=>{
        try{
            const res= await axios.get("/api/categories")
            setCategories(res.data.categories);
        }catch(err){
            console.log(err)
        }
    };
    useEffect(() => {
        fetchGenre();
    }, []);
    return(
        <header className="header-home-section">
        <div className="product-cate flex flex-wrap margin-top-16p flex-center positon-relative gap-2r">
            {categories.map(item =>
                <div className="category category-1">
                    <img src={item.image} alt="product" className="img-res" />
                </div>
            )}
        </div>
    </header>
    )
}