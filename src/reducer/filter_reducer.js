const filter_reducer =(state ,actions)=>{
    switch (actions.type) {
        case "IS_LOADING":
           return {
                ...state,
                isFilterLoading: true,
           }
        case "IS_ERROR":
            return {
                ...state,
                isFilterLoading: true,
                isError: true,
            }   
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = actions.payload.map((curElem) => curElem.price)
            let maxPrice = (Math.max(...priceArr))
            return {
                ...state,
                filterProducts: [...actions.payload],
                allProducts: [...actions.payload],
                filters: {...state.filters, price:maxPrice, maxPrice:maxPrice}
            } 
        case "SET_GRID_VIEW":
            return {
                ...state,
                gridView: true,
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                gridView: false,
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: actions.payload,
            }
        case "SORTING_PRODUCTS":
            let newSortData;
            const {filterProducts, sorting_value} = state;
            let tempSortProducts = [...filterProducts];

            const sortingProducts=(a, b)=>{
                if(sorting_value === "lowest"){
                    return a.price - b.price
                }
                if(sorting_value === "highest"){
                    return b.price - a.price
                }
                if(sorting_value === "a-z"){
                    return a.name.localeCompare(b.name)
                }
                if(sorting_value === "z-a"){
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = tempSortProducts.sort(sortingProducts);

            return {
                ...state,
                filterProducts: newSortData,
            }
        case "UPDATE_FILTER_VALUE":
            const {name, value} = actions.payload;
            
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [name]: value
                }
                
            }
        case "FILTER_PRODUCTS":
            let { allProducts } = state;
            let tempFilterProducts = [ ...allProducts ];

            const { text, category, company, color, price } = state.filters;
            
            if(text){ 
                tempFilterProducts = tempFilterProducts.filter((curElem) =>{
                    return curElem.name.toLowerCase().includes(text);
                });
            }
            if(category !== "all") {
                tempFilterProducts = tempFilterProducts.filter((curElem) => {
                    return curElem.category === category;
                })
            }
            if(company !== "all") {
                tempFilterProducts = tempFilterProducts.filter((curElem)=>{
                    return curElem.company.toLowerCase() === company.toLowerCase()
                })
            }

            if(color !== "all"){
                tempFilterProducts = tempFilterProducts.filter(
                    (curElem) => curElem.colors.includes(color)
                )
            }
            if(price){
                tempFilterProducts = tempFilterProducts.filter((curElem)=>curElem.price <= price)
            }
            
            return {
                ...state,
                filterProducts: tempFilterProducts,
            }
        case "CLEAR_FILTERS":{
            return {
                ...state,
                filters:{
                    ...state.filter,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice,
                    
                }
            }
        }       
        default:
            return state;
    }
}

export default filter_reducer;
