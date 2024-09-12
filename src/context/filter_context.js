import React, {useContext, useReducer, createContext, useEffect} from "react";

import { useProductContext } from "./productcontext";
import filter_reducer from "../reducer/filter_reducer";

const FilterContext = createContext();

const initialState={
    isFilterLoading : false,
    isError: false,
    gridView: true,
    filterProducts : [],
    allProducts : [],
    sorting_value: "lowset",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0
    }
}


export const FilterContextProvider =({children})=>{
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(filter_reducer, initialState);

    const setGridView=()=>{
        dispatch({type: "SET_GRID_VIEW"});
    }

    const setListView=()=>{
        dispatch({type: "SET_LIST_VIEW"});
    }

    const updateFilterValue =(event)=>{ // search products
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name, value}})
    }
    const clearFilter=()=>{
        dispatch({type: "CLEAR_FILTERS"})
    }

    const sorting=(event)=>{// sorting function
        const userData = event.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: userData});
    }
    
    useEffect(()=>{// to render sorted products and filtered products
        dispatch({type: "FILTER_PRODUCTS"});
        dispatch({type:"SORTING_PRODUCTS", payload: products});
    },[products, state.sorting_value, state.filters])

    useEffect(()=>{ // render all products
        dispatch({type: "IS_LOADING"})
            try {
                dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
                
            } catch (error) {
                dispatch({type: "IS_ERROR"})
            }
    },[products]);

   return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilter}}>{children}</FilterContext.Provider>
}


export const useFilterContext=()=>{ // custom hook (with useContext)
    return useContext(FilterContext);
}

