import styled from "@emotion/styled";

export const DetailsListStyled = styled.ul`
   display: flex;
   gap: 8px;
   flex-wrap: wrap;
   margin-bottom: 24px;

   li {
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-radius: 100px;
      background-color: var(--feature-background-color);
      font-weight: 500;
      font-size: 16px;
      line-height: 1.25;
      color: var(--primary-color);

      &.capitalize {
         text-transform: capitalize;
      }
   }

   svg {
      fill: var(--primary-color);
      stroke: var(--primary-color);
   }
`;
