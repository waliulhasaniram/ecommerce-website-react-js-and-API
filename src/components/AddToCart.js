import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import {Button} from '../styles/Button';
import {useCartContext} from "../context/cart_context";

const AddToCart=({singleProduct})=>{
    
   const { addtoCart } = useCartContext();

    const {id, colors, stock} = singleProduct;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setIncreament =()=>{
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    const setDecreament =()=>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    return <Wrapper>
        <div className="colors">
            <p>Colors: </p>
            {colors.map((curColor, index)=>{
                return (
                <button key={index} style={{backgroundColor:curColor}} className={color === curColor ? "btnStyle active" : "btnStyle"} onClick={()=>{setColor(curColor)}}> 
                    {color === curColor ? <FaCheck className="checkStyle"/> : null}
                </button>)
            })}
        </div>

        {/* add to cart */}

        <CartAmountToggle amount={amount} setIncreament={setIncreament} setDecreament={setDecreament} />

        <NavLink to="/cart">
            <Button className="btn" onClick={()=> {addtoCart( id, color, amount, singleProduct)} }> Add To Cart</Button>
        </NavLink>
            
    </Wrapper>
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;