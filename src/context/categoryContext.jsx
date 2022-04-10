import axios from "axios"
import {createContext, useContext , useEffect,useState} from "react";


const categoryContext = createContext();

const CategoryContextProvider=({children})=>{

    const [category, setCategory] = useState([]);
    // console.log(category)
    useEffect(()=>{
        (async ()=>{
            try{
                const categoryData=await axios.get("/api/products");
                setCategory(categoryData.data.products)
            }catch(err){
                console.log(err);
            }
        })()
    },[])

    return (
        <categoryContext.Provider value={{category}}>
            {children}
        </categoryContext.Provider>
    )
}

const useCategoryContext= ()=> useContext(categoryContext);

export {useCategoryContext, CategoryContextProvider }
