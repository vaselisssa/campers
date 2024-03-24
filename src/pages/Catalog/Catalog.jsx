import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllAdverts } from "../../redux/adverts/operations";
import AdvertList from "../../components/AdvertList";
import Filter from "../../components/Filter";
import { CatalogStyled } from "./Catalog.styled";

const Catalog = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllAdverts());
   }, [dispatch]);

   return (
      <CatalogStyled>
         <Filter />
         <AdvertList />
      </CatalogStyled>
   );
};

export default Catalog;
