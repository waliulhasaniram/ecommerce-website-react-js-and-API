// import { type } from "@testing-library/user-event/dist/type";

import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import ProductsReducer from "../reducer/productReducer";

const initialStates = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct : {}
}

const API = "https://api.pujakaitem.com/api/products";

// Creating the context  

const AppContext = createContext();

const AppProvider =({ children })=>{
  const [state, dispatch] = useReducer(ProductsReducer, initialStates) // useReducer (ProductsReducer is a reducer function) (dispatch calls actions) (actions do tasks)

  const getProducts = async(url)=>{ // async getProducts function with Axios to fetch data from API
    dispatch({type: "SET_LOADING"});
        try {
          const res = await axios.get(url);
          const products = await res.data;
          dispatch({type: "SET_API_DATA", payload: products})
        } catch (error) {
          dispatch({type: "API_ERROR"});
        }
   } 

  const getSingleProducts = async(url)=> { // async getProducts function with Axios to fetch data from API (single product)
    dispatch({type: "SET_SINGLE_LOADING"});
      try {
        const res = await axios.get(url);
        const singleProduct = await res.data;
        dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct});
      } catch (error) {
        dispatch({type: "SET_SINGLE_ERROR"})
      }
  }

  useEffect(()=>{ //useEffect will render once
    getProducts(API)  
  },[]);

  return <AppContext.Provider value={{...state, getSingleProducts}}> { children } </AppContext.Provider>   
}

// creating custom hook and returning useContext hook
const useProductContext =()=> {
    return useContext(AppContext)
};

export { AppContext, AppProvider, useProductContext };


