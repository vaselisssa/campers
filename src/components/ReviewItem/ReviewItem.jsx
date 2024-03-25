import React from "react";

import ReviewRating from "../ReviewRating";

import { ReviewStyled } from "./ReviewItem.styled";

const ReviewItem = ({ review }) => {
   const { comment, reviewer_name, reviewer_rating } = review;

   return (
      <ReviewStyled>
         <div>{reviewer_name}</div>
         <ReviewRating rating={reviewer_rating} />
         <div>{comment}</div>
      </ReviewStyled>
   );
};

export default ReviewItem;
