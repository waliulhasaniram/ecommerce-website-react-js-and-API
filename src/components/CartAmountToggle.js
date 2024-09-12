import React from "react";
import {FaMinus, FaPlus} from 'react-icons/fa'

const CartAmountToggle =({amount, setIncreament, setDecreament})=>{

    return <>
    <div className="cart-button">
        <div className="amount-toggle">
            <button onClick={()=>{setDecreament()}}> <FaMinus /> </button>
            <div className="amount-style">{amount}</div>
            <button onClick={()=>{setIncreament()}}> <FaPlus /> </button>
        </div>
    </div>
    
    </>
}

export default CartAmountToggle;