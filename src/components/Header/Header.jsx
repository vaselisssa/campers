import React from "react";
import { HeaderStyled, NavList, NavItem, LinkStyled } from "./Header.styled";

const Header = () => {
   return (
      <HeaderStyled>
         <NavList>
            <NavItem>
               <LinkStyled to={"/"}>Home</LinkStyled>
            </NavItem>
            <NavItem>
               <LinkStyled to={"catalog"}>Catalog</LinkStyled>
            </NavItem>
            <NavItem>
               <LinkStyled to={"favorites"}>Favorites</LinkStyled>
            </NavItem>
         </NavList>
      </HeaderStyled>
   );
};

export default Header;
