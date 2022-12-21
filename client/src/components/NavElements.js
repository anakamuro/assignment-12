import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: space-between;
z-index: 10;
`
export const NavLink = styled(Link)`
color: #fff;
widTH: 100vw;;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;
font-size: 24px;

`

export const NavMenu = styled.div`
display: flex;
align-items: space-between;
width: 100%;
`
