import axios from "axios"
import {createContext, useContext , useEffect,useState} from "react";


const categoryContext = createContext();

const CategoryContextProvider=({children})=>{

    const [category, setCategory] = useState([]);
    useEffect(()=>{
        (async ()=>{
            try{
                const categoryData=await axios.get("/api/categories");
                setCategory(categoryData.data.categories);
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
