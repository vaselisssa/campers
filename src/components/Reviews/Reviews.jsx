import React from "react";
import { nanoid } from "nanoid";
import ReviewItem from "../ReviewItem";
import { ReviewsWrapper } from "./Reviews.styled";

const Reviews = ({ reviews }) => {
   return (
      <ReviewsWrapper>
         {reviews && reviews.length > 0 ? (
            reviews.map((review) => (
               <ReviewItem key={nanoid()} review={review} />
            ))
         ) : (
            <p>No reviews available.</p>
         )}
      </ReviewsWrapper>
   );
};

export default Reviews;
