import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAdverts } from "../../redux/adverts/operations";
import { resetFilter } from "../../redux/adverts/filterSlice.js";
import AdvertList from "../../components/AdvertList";
import Filter from "../../components/Filter";
import { CatalogStyled } from "./Catalog.styled";
import {
   selectAdverts,
   selectError,
   selectFilter,
   selectTotal,
} from "../../redux/adverts/selectors.js";

const Catalog = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(resetFilter());
   }, [dispatch]);

   const adverts = useSelector(selectAdverts);
   const total = useSelector(selectTotal);
   const filter = useSelector(selectFilter);
   const error = useSelector(selectError);

   return (
      <CatalogStyled>
         <Filter />
         <AdvertList
            adverts={adverts}
            total={total}
            filter={filter}
            error={error}
         />
      </CatalogStyled>
   );
};

export default Catalog;
