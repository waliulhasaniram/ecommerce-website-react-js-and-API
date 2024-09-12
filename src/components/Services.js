import React from "react";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import styled from "styled-components";


export default function Services(){
    return <Wrapper>
        <div className="container">
            <div className="grid grid-three-column">
                <div className="services-1">
                    <TbTruckDelivery className="icon"/>
                    <h3>Super fast delivery</h3>
                </div>

                <div className="services-2">
                    <div className=" services-column-2"><MdSecurity className="icon"/><h3>super pretected security</h3></div>
                    <div className="services-column-2"><GiReceiveMoney className="icon"/> <h3>Get your money back anytime</h3></div>
                </div>
                <div className="services-1">
                    <TbReplace className="icon" />
                    <h3>Super fast replacement</h3>
                </div>
            </div>

        </div>
    </Wrapper>
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 1rem;
    background-color: transparent;
    box-shadow: none;

    .services-column-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      margin-top: 1.5rem;
      margin-bottom: 3.5rem;
      padding: 2rem;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;