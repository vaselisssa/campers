import styled from "@emotion/styled";

export const AdvertItemStyled = styled.li`
   display: flex;
   gap: 24px;
   border: 1px solid rgba(16, 24, 40, 0.2);
   border-radius: 20px;
   padding: 24px;
   width: 888px;
   height: 358px;
`;

export const ImgThumb = styled.div`
   border-radius: 10px;
   overflow: hidden;
   width: 290px;
   height: 310px;

   img {
      height: 100%;
      object-fit: cover;
   }
`;

export const InfoBox = styled.div`
   width: 526px;
`;

export const TitleWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 8px;
`;

export const Title = styled.h3`
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;

   font-weight: 600;
   font-size: 24px;
   line-height: 1.25;
   color: var(--primary-color);
`;

export const PriceWrapper = styled.div`
   display: flex;
   gap: 8px;
   align-items: center;
`;

export const Price = styled.p`
   font-weight: 600;
   font-size: 24px;
   line-height: 1.25;
   color: var(--primary-color);
`;

export const ToggleFavBtn = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   padding: 0;
   background-color: transparent;

   svg {
      fill: ${({ $favorite }) =>
         $favorite ? "var( --button-color)" : "transparent"};
      stroke: ${({ $favorite }) =>
         $favorite ? "var( --button-color)" : "var(--primary-color)"};
      transition: fill 0.3s ease, stroke 0.3s ease;

      &:hover {
         fill: transparent;
         stroke: var(--button-color);
      }
   }
`;

export const RatingLocationWrapper = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: baseline;
   gap: 16px;
   margin-bottom: 24px;
`;

export const Rating = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 4px;

   svg {
      fill: var(--rating-color);
   }

   button {
      padding: 0;
      border: none;
      background-color: transparent;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      text-decoration: underline;
      transition: color 0.3s ease;

      &:hover {
         color: var(--rating-color);
         border-color: var(--rating-color);
      }
   }
`;

export const Location = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 4px;
   line-height: 1.5;

   svg {
      fill: transparent;
      stroke: var(--primary-color);
   }
`;

export const Description = styled.p`
   max-width: 100%;
   margin-bottom: 24px;

   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;

   line-height: 1.5;
   color: var(--secondary-color);
`;

export const ShowMoreBtn = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;

   padding: 16px 40px;
   border: none;
   outline: none;
   border-radius: 200px;

   font-weight: 500;
   font-size: 16px;
   line-height: 1.5;
   letter-spacing: -0.01em;

   color: #fff;
   background-color: var(--button-color);

   transition: background-color 0.3s ease;

   &:hover {
      background-color: #d84343;
   }
`;
