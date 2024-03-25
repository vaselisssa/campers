import styled from "@emotion/styled";

export const AdvertModalContent = styled.div`
   position: fixed;
   top: 20px;
   border-radius: 20px;
   padding: 40px;
   width: 982px;
   height: calc(100vh - 5%);
   background-color: #fff;
   overflow-y: auto;

   ::-webkit-scrollbar {
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

export const Title = styled.h3`
   margin-bottom: 8px;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;

   font-weight: 600;
   font-size: 24px;
   line-height: 1.25;
   color: var(--primary-color);
`;

export const RatingLocationWrapper = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: baseline;
   gap: 16px;
   margin-bottom: 16px;
`;

export const Price = styled.p`
   margin-bottom: 24px;
   font-weight: 600;
   font-size: 24px;
   line-height: 1.25;
   color: var(--primary-color);
`;

export const ScrollBox = styled.div`
   margin-right: -20px;
   height: 450px;
   overflow-y: auto;

   &::-webkit-scrollbar {
      margin-left: 30px;
      width: 8px;
   }

   &::-webkit-scrollbar-thumb {
      border-radius: 7px;
      background-color: #d9d9d9;
   }

   div {
      width: 902px;
   }
`;

export const GalleryWrapper = styled.div`
   display: flex;
   justify-content: flex-start;
   gap: 16px;
   margin-bottom: 24px;
`;

export const Description = styled.p`
   max-width: 100%;
   margin-bottom: 24px;

   line-height: 1.5;
   color: var(--secondary-color);
`;

export const TabsBox = styled.div`
   margin-top: 44px;
   display: flex;
   gap: 40px;
`;

export const Tab = styled.button`
   padding-bottom: 24px;
   outline: none;
   border: none;
   background-color: transparent;
   font-weight: 600;
   font-size: 20px;
   line-height: 1.2;
   position: relative;

   &:hover {
      color: var(--button-color);
   }

   &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: transparent;
      transition: background-color 0.3s ease;
      margin-bottom: -2px;
   }

   ${({ isActive }) =>
      isActive &&
      `
      &::after {
         background-color: var( --button-color)
      }
   `}
`;

export const Line = styled.hr`
   margin: 0;
   border: none;
   height: 1px;
   background-color: rgba(16, 24, 40, 0.2);
   position: relative;
   transition: background-color 0.3s ease;
`;
