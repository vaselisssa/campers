import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";
import Header from "../Header";
import { Container, Content, LoaderContainer } from "./Layout.styled";

const Layout = () => {
   return (
      <Container>
         <Header />
         <Content>
            <Suspense
               fallback={
                  <LoaderContainer>
                     <Loader />
                  </LoaderContainer>
               }
            >
               <Outlet />
            </Suspense>
         </Content>
      </Container>
   );
};

export default Layout;
