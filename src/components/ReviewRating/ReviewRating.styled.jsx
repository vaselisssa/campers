import styled from "@emotion/styled";

export const RatingStyled = styled.div`
   display: flex;
   gap: 4px;
`;

export const FilledStar = styled.div`
   svg {
      fill: var(--rating-color);
   }
`;

export const EmptyStar = styled.div`
   svg {
      fill: var(--feature-background-color);
   }
`;
