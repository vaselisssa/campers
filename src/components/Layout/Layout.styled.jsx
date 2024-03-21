import styled from "@emotion/styled";

export const Container = styled.div`
   width: 100%;
`;

export const Content = styled.main`
   display: flex;
   justify-content: center;
   width: 100%;
   min-height: calc(100vh - 64px);
`;

export const LoaderContainer = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
