import styled from "@emotion/styled";

export const DetailsListStyled = styled.ul`
   display: flex;
   width: 100%;
   gap: 8px;
   flex-wrap: wrap;
`;

export const DetailItem = styled.li`
   background-color: var(--feature-background-color);
   padding: 12px 18px;
   border-radius: 100px;
   font-weight: 500;
   font-size: 16px;
   line-height: 1.25;
   color: var(--primary-color);
   display: flex;
   gap: 8px;

   svg {
      fill: transparent;
      stroke: var(--primary-color);
   }
`;
