import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";
import Header from "../Header";
import { Container } from "./Layout.styled";

const Layout = () => {
   return (
      <Container>
         <Header />
         <Suspense fallback={<Loader />}>
            <Outlet />
         </Suspense>
      </Container>
   );
};

export default Layout;
