import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
   background-color: #e44848; /* Красный цвет для хедера */
   padding: 20px;
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

   color: #fff;
   text-decoration: none;
   font-weight: bold;
   transition: color 0.3s ease, border-color 0.3s ease;
   border: 2px solid #fff;
   border-radius: 20px;
   padding: 8px;
   width: 150px;

   &:hover,
   &:focus,
   &:active {
      color: #c13030; /* Изменение цвета текста при ховере */
      border-color: #c13030; /* Темная обводка при ховере */
   }
`;
