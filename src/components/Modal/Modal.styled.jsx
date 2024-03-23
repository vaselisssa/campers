import styled from "@emotion/styled";

export const Backdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;

   width: 100%;
   height: 100%;

   background-color: rgba(17, 18, 19, 0.4);
`;

export const Content = styled.div`
   width: 982px;
   height: 1288px;
   padding: 40px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   background-color: #fff;
   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
   border-radius: 20px;
`;
