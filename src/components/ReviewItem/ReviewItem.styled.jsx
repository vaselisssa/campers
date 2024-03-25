import styled from "@emotion/styled";

export const ReviewStyled = styled.li`
   display: flex;
   flex-direction: column;
   gap: 16px;
`;
export const NameBox = styled.div`
   display: flex;
   gap: 16px;
`;

export const FirstLetter = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 60px;
   height: 60px;
   background-color: var(--input-background-color);
   border-radius: 60px;

   font-weight: 600;
   font-size: 24px;
   line-height: 1.25;
   color: var(--button-color);
`;

export const NameRatingWrapper = styled.div`
   padding-top: 8px;
   padding-bottom: 8px;

   h4 {
      font-weight: 600;
      font-size: 18px;
      line-height: 1.33333;
   }
`;

export const Comment = styled.div`
   font-weight: 400;
   font-size: 16px;
   line-height: 1.5;
   color: var(--secondary-color);
`;
