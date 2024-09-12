import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import {FaTrash} from "react-icons/fa"
import { useCartContext } from "../context/cart_context";


const CartItem =({id, name, color, amount, image, price})=>{
    const {removeItem, setIncreament, setDecreament} = useCartContext();

    return ( 
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
            <figure>
                <img src={image} alt={id}/>
            </figure>
        </div>

        <p>{name}</p>

        <div className="color-div">
            <p>color:</p>
            <div className="color-style" style={{backgroundColor: color, color: color}}></div>
        </div>
      </div>

{/* price */}
        <div className="cart-hide"> 
            <p> {Intl.NumberFormat("BDT", {style: "currency",
                                           currency: "BDT",
                                           maximumFractionDigits: 2      
                                          }
                                  ).format((price/100)-100)}
            </p>
        </div>
{/* Amount */}
        <CartAmountToggle amount={amount} setIncreament={()=>setIncreament(id)} setDecreament={()=>setDecreament(id)} />

{/* Subtotal */}
        <div className="cart-hide">
            <p>{Intl.NumberFormat("BDT", {style: "currency",currency: "BDT", maximumFractionDigits: 2 }).format((price/100 -100)*amount)}</p>
        </div> 

{/* Remove */}
         <div>
            <FaTrash className="remove_icon" onClick={()=> removeItem(id)}/>
         </div>
    </div>
    )
}

export default CartItem;