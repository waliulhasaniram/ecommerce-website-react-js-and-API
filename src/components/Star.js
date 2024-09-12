import React from "react";
import styled from "styled-components";
import { FaStarHalfAlt, FaRegStar, FaStar  } from "react-icons/fa";

const Star =(props)=>{

    const {stars, reviews} = props;
    
    const ratingStar = Array.from({length: 5}, (element, index)=>{
        const number = index + 0.4;
        //debugger;
        return(
            <span key={index}>
                {stars >= index + 1 ? <FaStar className="icon" /> : stars >= number ? <FaStarHalfAlt className="icon"/> : <FaRegStar className="icon"/> }
            </span>
        )
    })

    return <Wrapper>
        <div className="icon-style">
            {ratingStar}
            <p>({reviews} custom reviews)</p>

        </div>
    </Wrapper>
}
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;