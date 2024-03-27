import styled from "@emotion/styled";

export const AdvertListWrapper = styled.div`
   padding-bottom: 100px;
   width: 888px;
`;

export const NoResultsMessage = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 100%;
   height: 100%;

   font-size: 40px;
   font-weight: 600;
   line-height: 1.25;
   color: var(--button-color);
`;

export const AdvertListStyled = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 24px;
`;

export const LoadMoreBtn = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;

   margin: 0 auto;
   margin-top: 50px;
   padding: 16px 32px;
   border: 1px solid rgba(71, 84, 103, 0.2);
   background-color: inherit;
   outline: none;
   border-radius: 200px;

   font-weight: 500;
   font-size: 16px;
   line-height: 1.5;
   letter-spacing: -0.01em;

   color: #101828;
   transition: border-color 0.3s ease;

   &:hover {
      border-color: #d84343;
   }
`;
