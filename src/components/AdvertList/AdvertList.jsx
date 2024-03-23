import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import AdvertItem from "../AdvertItem";
import {
   AdvertListWrapper,
   AdvertListStyled,
   LoadMoreBtn,
} from "./AdvertList.styled";

const AdvertList = () => {
   const adverts = useSelector(selectAdverts);
   const [loadedCount, setLoadedCount] = useState(4);

   const handleLoadMore = () => {
      setLoadedCount((prev) => prev + 4);
   };

   return (
      <AdvertListWrapper>
         <AdvertListStyled>
            {adverts.slice(0, loadedCount).map((el) => (
               <AdvertItem key={el._id} item={el} />
            ))}
         </AdvertListStyled>

         {loadedCount < adverts.length && (
            <LoadMoreBtn type="button" onClick={handleLoadMore}>
               Load More
            </LoadMoreBtn>
         )}
      </AdvertListWrapper>
   );
};

export default AdvertList;
