import styled from "@emotion/styled";

export const Backdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;

   width: 100vw;
   max-height: calc(100vh - 2%);
   z-index: 999;
   overflow-y: auto;

   display: flex;
   justify-content: center;
   align-items: center;

   background-color: rgba(17, 18, 19, 0.4);
`;
