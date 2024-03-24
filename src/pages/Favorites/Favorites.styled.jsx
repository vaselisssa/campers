import styled from "@emotion/styled";

export const FavListStyled = styled.div`
   display: flex;
   flex-direction: column;
   gap: 24px;
`;

export const EmptyFav = styled.div`
   font-size: 40px;
   font-weight: 600;
   line-height: 1.25;
   text-align: center;
   color: var(--button-color);

   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
