import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAdverts, selectFilter } from "../../redux/adverts/selectors";
import { filterAdverts } from "../../utils/filterUtil.js";
import AdvertItem from "../AdvertItem";
import {
   AdvertListWrapper,
   AdvertListStyled,
   LoadMoreBtn,
} from "./AdvertList.styled";

const AdvertList = () => {
   const adverts = useSelector(selectAdverts);
   const filter = useSelector(selectFilter);
   const [loadedCount, setLoadedCount] = useState(4);

   console.log(filter);
   const filteredAdverts = filterAdverts(adverts, filter);
   console.log("filteredAdverts:", filteredAdverts);

   const handleLoadMore = () => {
      setLoadedCount((prev) => prev + 4);
   };

   return (
      <AdvertListWrapper>
         <AdvertListStyled>
            {filteredAdverts.slice(0, loadedCount).map((el) => (
               <AdvertItem key={el._id} item={el} />
            ))}
         </AdvertListStyled>

         {loadedCount < filteredAdverts.length && (
            <LoadMoreBtn type="button" onClick={handleLoadMore}>
               Load More
            </LoadMoreBtn>
         )}
      </AdvertListWrapper>
   );
};

export default AdvertList;
