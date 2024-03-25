import React from "react";
import Icon from "../Icon";
import { RatingStyled, FilledStar, EmptyStar } from "./ReviewRating.styled";

const ReviewRating = ({ rating }) => {
   const stars = 5;

   return (
      <RatingStyled>
         {[...Array(stars)].map((_, index) => {
            const filled = index < rating;
            return filled ? (
               <FilledStar key={index}>
                  <Icon icon="icon-star" width={16} height={16} />
               </FilledStar>
            ) : (
               <EmptyStar key={index}>
                  <Icon icon="icon-star" width={16} height={16} />
               </EmptyStar>
            );
         })}
      </RatingStyled>
   );
};

export default ReviewRating;
