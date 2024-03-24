import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";
import Header from "../Header";
import { Container, Content } from "./Layout.styled";

const Layout = () => {
   return (
      <Container>
         <Header />
         <Content>
            <Suspense fallback={<Loader />}>
               <Outlet />
            </Suspense>
         </Content>
      </Container>
   );
};

export default Layout;
