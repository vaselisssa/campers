import styled from "@emotion/styled";

export const AdvertModalContent = styled.div`
   position: relative;
   border-radius: 20px;
   padding: 40px;
   width: 982px;
   max-height: calc(100vh - 2%);
   background-color: #fff;
   overflow-y: auto;

   &::-webkit-scrollbar {
      width: 0;
   }
`;

export const CloseBtn = styled.div`
   position: absolute;
   top: 40px;
   right: 40px;
   border: none;
   outline: none;
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;

   svg {
      stroke: var(--primary-color);
      transition: stroke 0.3s ease;

      &:hover {
         stroke: var(--button-color);
      }
   }
`;
