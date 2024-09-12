import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillAppstore } from "react-icons/ai";


const Header =()=> {
    const MainHearder = styled.header`
    padding: 0 4.8rem;
    min-height:  10rem;
    background-color : ${({theme}) => theme.colors.bg};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
`;

    return<MainHearder>
        <NavLink to="/">
        <AiFillAppstore style={{fontSize:"60px"}} />
        </NavLink>
        <Nav />
    </MainHearder>
}


export default Header;