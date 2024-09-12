import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridViews from "./GridViews";
import ListViews from "./ListViews";



const ProductList=()=>{
    
    const {filterProducts, gridView } = useFilterContext();
       
    if(gridView===true){
        return <GridViews filterProducts={filterProducts}/>
        
    }
    if(gridView === false){
        return <ListViews filterProducts={filterProducts}/>
    }
}

export default ProductList;