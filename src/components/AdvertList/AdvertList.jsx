import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
   selectAdverts,
   selectFilter,
   selectIsLoading,
} from "../../redux/adverts/selectors";
import { filterAdverts } from "../../utils/filterUtil.js";
import AdvertItem from "../AdvertItem";
import {
   AdvertListWrapper,
   NoResultsMessage,
   AdvertListStyled,
   LoadMoreBtn,
} from "./AdvertList.styled";

const AdvertList = () => {
   const adverts = useSelector(selectAdverts);
   const filter = useSelector(selectFilter);
   const isLoading = useSelector(selectIsLoading);
   const [loadedCount, setLoadedCount] = useState(4);
   const [isDataLoaded, setIsDataLoaded] = useState(false);

   const filteredAdverts = filterAdverts(adverts, filter);

   useEffect(() => {
      if (filteredAdverts.length > 0) {
         setIsDataLoaded(true);
      }
   }, [filteredAdverts]);

   const handleLoadMore = () => {
      setLoadedCount((prev) => prev + 4);
   };

   return (
      <AdvertListWrapper>
         {filteredAdverts.length > 0 ? (
            <AdvertListStyled>
               {filteredAdverts.slice(0, loadedCount).map((el) => (
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

         {loadedCount < filteredAdverts.length && (
            <LoadMoreBtn type="button" onClick={handleLoadMore}>
               Load More
            </LoadMoreBtn>
         )}
      </AdvertListWrapper>
   );
};

export default AdvertList;
