import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllAdverts } from "../../redux/adverts/operations";
import AdvertList from "../../components/AdvertList";

const Catalog = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllAdverts());
   }, [dispatch]);

   return (
      <div>
         <AdvertList />
      </div>
   );
};

export default Catalog;
