import React, { useEffect, useState } from "react";
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

   return (
      <AdvertListWrapper>
         <AdvertListStyled>
            {adverts.map((el) => (
               <AdvertItem key={el._id} item={el} />
            ))}
         </AdvertListStyled>

         <LoadMoreBtn
            type="button"
            // onClick={loadMore}
         >
            Load More
         </LoadMoreBtn>
      </AdvertListWrapper>
   );
};

export default AdvertList;
