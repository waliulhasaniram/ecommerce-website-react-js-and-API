import { createContext, useContext, useEffect, useReducer } from "react";
import cart_reducer from "../reducer/cart_reducer";

const Cart_Context = createContext();

const getCartData =()=>{ //get localStorage data
    let localCartData = localStorage.getItem("CartItems");
    if(localCartData){
        return JSON.parse(localCartData);
    }else{
        return [];
    }
};

const initialState = {
    cart: getCartData(),
    total_item:"",
    total_price:"",
    shipping_fee: 50000,
}

const Cart_Provider =({children})=>{

    const [state, dispatch] = useReducer(cart_reducer, initialState);

    const addtoCart=(id, color, amount, singleProduct)=>{
            dispatch({type: "ADD_TO_CART", payload: {id, color, amount, singleProduct} })
    }
    const removeItem=(id)=>{
            dispatch({type:"REMOVE_ITEM", payload: id})
    }
    const clearCart =()=>{
            dispatch({type: "CLEAR_CART"})
    }
    const setIncreament=(id)=>{
        dispatch({type: "SET_INCREAMENT", payload: id})
    }
    const setDecreament=(id)=>{
        dispatch({type: "SET_DECREAMENT", payload: id})
    }

    //tp add the data in localStorage
    // set data get data
    useEffect(()=>{ // set cart data to localStorage
        dispatch({type: "CART_TOTAL_PRICE"})
        dispatch({type: "CART_ICON_TOTAL_ITEM"})
        localStorage.setItem("CartItems", JSON.stringify(state.cart))
    },[state.cart]);

    return <Cart_Context.Provider value={{...state, addtoCart, removeItem, clearCart, setIncreament, setDecreament}}>{children}</Cart_Context.Provider>
}

const useCartContext=()=>{
    return useContext(Cart_Context)
}

export {Cart_Provider, useCartContext};