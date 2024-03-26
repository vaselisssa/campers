import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllAdverts } from "../../redux/adverts/operations";
import AdvertList from "../../components/AdvertList";
import Filter from "../../components/Filter";
import { CatalogStyled } from "./Catalog.styled";
import { resetFilter } from "../../redux/adverts/filterSlice.js";

const Catalog = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllAdverts());
      dispatch(resetFilter());
   }, [dispatch]);

   return (
      <CatalogStyled>
         <Filter />
         <AdvertList />
      </CatalogStyled>
   );
};

export default Catalog;
