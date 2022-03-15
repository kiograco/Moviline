import {Link} from "react-router-dom";
import {bounce }from 'react-animations';
import styled, { keyframes } from 'styled-components';



export const Body = styled.body`
    -moz-osx-font-smoothing:grayscale;
    -ms-flex-direction:column;
    -webkit-box-direction:normal;
    -webkit-box-orient:vertical;
    -webkit-font-smoothing:antialiased;
    background:#1c1c1c;
    color:#777;
    display:flex;
    flex-direction:column;
    font-family:Montserrat, sans-serif;
    font-size: 1em;
    font-weight:300;
    margin:0;
    height:100vh;
    padding: 0 5%;
    .menu-bar{
        display:flex;
        flex-direction:row;
        justify-content:space-around;
    }
`;

export const Nav = styled.nav`
    margin: 0 auto;
    width: 100%;
    background: #252222;
    box-shadow:0 3px 15px rgba(0,0,0,.15);
`;
export const A = styled(Link)`
    display: block;
    color: #a48d74;
    text-decoration: none;
    padding: 1rem 1rem;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition: all .3s ease-in-out;
`;


export const Logo = styled.h1`
    text-align: left;
    font-size: 300%;
    color: orangered;
`
export const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`}`;
