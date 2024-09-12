const cart_reducer =(state, actions)=>{

    switch (actions.type) {
        case "ADD_TO_CART":
            let {id, color, amount, singleProduct} = actions.payload;

            // see if product exists in cart. if exists then increase amount
            let existingProduct = state.cart.find((curItem)=> curItem.id === id+color)
            if(existingProduct){
                    let updatedProduct = state.cart.map((curElement)=>{
                    if(curElement.id === id+color){
                        let newAmount = curElement.amount + amount

                        if(newAmount >= curElement.max)
                            {newAmount = curElement.max}

                        return {
                            ...curElement,
                            amount : newAmount
                        }
                    }else{
                        return curElement;
                    }
                });
                return {
                    ...state,
                    cart: updatedProduct,
                }
            }
            else{
              let cartProduct = {
                    id: id + color,
                    amount,
                    color,
                    name: singleProduct.name,
                    price: singleProduct.price,
                    max: singleProduct.stock,
                    image: singleProduct.image[0].url
                }
                return {
                    ...state,
                    cart: [...state.cart, cartProduct]
                }
            }    

        case "REMOVE_ITEM":
            let updateedCart = state.cart.filter((curItem)=> curItem.id !== actions.payload)

            return{
                ...state,
                cart: updateedCart,
            }
        case "CLEAR_CART":
            return{
                ...state,
                cart: []
            } 
        case "SET_DECREAMENT":
            let updateAmount_DECREAMENT = state.cart.map((curElement)=>{
                if(curElement.id === actions.payload){
                    let decAmount = curElement.amount - 1;

                    if(decAmount <= 1){
                        decAmount = 1
                    }

                    return {
                        ...curElement,
                        amount: decAmount
                    }
                }else{
                    return curElement;
                }
            });
            return {...state, cart: updateAmount_DECREAMENT}

        case "SET_INCREAMENT":
            let updateAmount_INCREAMENT = state.cart.map((curElement)=>{
                if(curElement.id === actions.payload){
                    let incAmount = curElement.amount + 1

                    if(incAmount >= curElement.max){
                        incAmount = curElement.max
                    }

                    return{
                        ...curElement,
                        amount: incAmount
                    }
                }else{
                    return curElement;
                }
            });
            return{ ...state, cart: updateAmount_INCREAMENT}
        case "CART_ICON_TOTAL_ITEM":
            let updatedCartIcon = state.cart.reduce((initialValue, curElem)=>{
                let {amount} = curElem;
                initialValue = initialValue + amount
                return initialValue
            },0)
            return{
                ...state,
                total_item: updatedCartIcon
            }
        
        case "CART_TOTAL_PRICE":
            let total_price = state.cart.reduce((initialValue, curElem)=>{
                let {price, amount} = curElem;
                initialValue = initialValue + price * amount
                return initialValue
            }, 0);
            return {
                ...state,
                total_price
            }    

        default:
            return state;
    }
    
}

export default cart_reducer;