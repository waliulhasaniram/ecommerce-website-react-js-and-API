const ProductsReducer =(state, actions)=>{
    switch (actions.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading : true,
            }
        case "API_ERROR":
            return{
                ...state,
                isLoading: false,
                isError: true
            }
        case "SET_API_DATA":
            const featureData = actions.payload.filter((currentElement)=>{ 
                return currentElement.featured === true})
            return {
                ...state,
                isLoading: false,
                products: actions.payload,
                featureProducts: featureData
            }
        case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading: true,
            }    
        case "SET_SINGLE_PRODUCT" :
            return{
                ...state,
                isSingleLoading: false,
                singleProduct: actions.payload,
            }
        case "SET_SINGLE_ERROR":
            return{
                ...state,
                isSingleLoading: true,
                isError: true
            }       
    
        default:
            return state;
    }

}

export default ProductsReducer;

