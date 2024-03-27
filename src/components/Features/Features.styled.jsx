import styled from "@emotion/styled";

export const FeaturesStyled = styled.div`
   width: 430px;
   display: flex;
   flex-direction: column;
   gap: 44px;
`;

export const VehicleDetailsBox = styled.div`
   width: 430px;
   display: flex;
   flex-direction: column;

   h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 1.2;
   }
`;

export const Line = styled.hr`
   margin: 24px 0;
   border: none;
   height: 1px;
   background-color: rgba(16, 24, 40, 0.2);
   position: relative;
   transition: background-color 0.3s ease;
`;
