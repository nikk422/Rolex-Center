import {useReducer , useContext , createContext } from "react";

const wishlistCartContext=createContext();

const WishlistAndCartProvider=({children})=>{

    const wishlistCartReduce=(state,action)=>{
        switch(action.type){
            case "ADD_TO_WISHLIST":
                return {...state,wishlist:[...state.wishlist,action.payload]};
            case "REMOVE_FROM_WISHLIST":
                const updateWishlist=state.wishlist.filter(item=>item.id !==action.payload.id)
                return {...state,wishlist:updateWishlist};

            case "ADD_TO_CART":
                const items={...action.payload,cartQ:1}
                return {...state,cart:[...state.cart,items]};

            case "REMOVE_FROM_CART":
                const removeCart=state.cart.filter(item=>item.id !==action.payload.id)
                return {...state,cart:removeCart};
            case "INCREASE":
                let incre=state.cart.map(items => items.id === action.payload.id ? 
                    {...items,cartQ:items.cartQ+1 } : items );
                return{...state,cart:[...incre]};
            case "DECREASE":
                let decri=state.cart.map(items=>items.id===action.payload.id ?
                    {...items,cartQ:items.cartQ-1}:items);
                    return{...state,cart:[...decri]};
            default:
                return {...state}
        };
    }
    const[wishlistCartState, dispatchWishlistCart]=useReducer(wishlistCartReduce,
        {
            wishlist: [],
            cart:[]
        });

        return (
            <wishlistCartContext.Provider value={{wishlistCartState,dispatchWishlistCart}}>
                {children}
            </wishlistCartContext.Provider>
        )
};

const useWishlistCart=()=>useContext(wishlistCartContext);
export {WishlistAndCartProvider , useWishlistCart}