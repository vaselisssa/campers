import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   z-index: 1000;

   background-color: var(--input-background-color);
   padding: 20px;
   border-bottom: 2px solid var(--secondary-color);
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
   padding: 0;
   margin: 0;
   display: flex;
   align-items: center;
`;

export const NavItem = styled.li`
   margin-right: 40px;

   &:last-of-type {
      margin-left: auto;
   }
`;

export const LinkStyled = styled(NavLink)`
   display: flex;
   justify-content: center;
   align-items: center;

   color: var(--secondary-color);
   text-decoration: none;
   font-weight: 600;
   border: 2px solid var(--secondary-color);
   border-radius: 200px;
   padding: 16px;
   width: 180px;
   transition: color 0.3s ease, background-color 0.3s ease;

   &:hover,
   &:focus,
   &:active {
      color: #fff;
      background-color: var(--secondary-color);
   }
`;
