import React from "react";

import ReviewRating from "../ReviewRating";

import {
   ReviewStyled,
   NameBox,
   FirstLetter,
   NameRatingWrapper,
   Comment,
} from "./ReviewItem.styled";

const ReviewItem = ({ review }) => {
   const { comment, reviewer_name, reviewer_rating } = review;

   const getFirstLetter = (name) => {
      return name.charAt(0).toUpperCase();
   };

   const firstLetter = getFirstLetter(reviewer_name);

   return (
      <ReviewStyled>
         <NameBox>
            <FirstLetter>{firstLetter}</FirstLetter>
            <NameRatingWrapper>
               <h4>{reviewer_name}</h4>
               <ReviewRating rating={reviewer_rating} />
            </NameRatingWrapper>
         </NameBox>
         <Comment>{comment}</Comment>
      </ReviewStyled>
   );
};

export default ReviewItem;
