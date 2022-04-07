import {createContext, useContext , useEffect ,useReducer,useState} from "react";
import axios from "axios";
import { productReduce } from "./ReducerFunc";


const userContext=createContext();

const UserProvider=({children})=>{
    const [productState , productDispatch] = useReducer(productReduce,{
        sort :null,
        byStock:false,
        byFastDelivery:false,
        byRating:null,
        byRange:null,
        bySearch:"",
       categories:[]
    });


    const [ products , setProducts]=useState([]);

    const fetchProducts=async() => {
      try{
        const res= await axios.get("/api/products")
        setProducts(res.data.products)
      }catch(err){
        console.log(err);
  
      }
    };
    useEffect(()=>{
      fetchProducts()
    },[])
  
    return(
        <userContext.Provider value={{products , productState ,productDispatch}}>
            {children}
        </userContext.Provider>
    )
}

const useProductContext=()=>useContext(userContext);

export {useProductContext, UserProvider}
