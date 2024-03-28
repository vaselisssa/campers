import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getAdverts } from "../../redux/adverts/operations.js";
import { convertFilterToSearchParams } from "../../utils/сonverter.js";

import AdvertItem from "../AdvertItem";
import {
   AdvertListWrapper,
   NoResultsMessage,
   AdvertListStyled,
   LoadMoreBtn,
} from "./AdvertList.styled";

const AdvertList = ({ adverts, total, filter, error }) => {
   const dispatch = useDispatch();
   const [page, setPage] = useState(1);
   const [isDataLoaded, setIsDataLoaded] = useState(false);

   useEffect(() => {
      const searchParams = convertFilterToSearchParams(filter);
      console.log("Parameters before dispatch:", {
         searchParams,
      });
      dispatch(getAdverts({ page, limit: 4, searchParams }));
   }, [dispatch, filter, page]);

   useEffect(() => {
      if (error) {
         toast.error(`Error: ${error}`);
      }
   }, [error]);

   useEffect(() => {
      if (adverts.length > 0 && total > 0) {
         setIsDataLoaded(true);
      }
   }, [adverts, total]);

   const handleLoadMore = () => {
      setPage(page + 1);
   };

   return (
      <AdvertListWrapper>
         <ToastContainer />
         {adverts.length > 0 ? (
            <AdvertListStyled>
               {adverts.map((el) => (
                  <AdvertItem key={el._id} item={el} />
               ))}
            </AdvertListStyled>
         ) : (
            isDataLoaded && (
               <NoResultsMessage>
                  <p>No advertisements match your criteria.</p>
               </NoResultsMessage>
            )
         )}

         {page * 4 < total && (
            <LoadMoreBtn type="button" onClick={handleLoadMore}>
               Load More
            </LoadMoreBtn>
         )}
      </AdvertListWrapper>
   );
};

export default AdvertList;
