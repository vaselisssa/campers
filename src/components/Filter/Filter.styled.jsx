import styled from "@emotion/styled";

export const FilterBox = styled.aside`
   width: 360px;
`;

export const Location = styled.div`
   h4 {
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.5;
      color: rgba(16, 24, 40, 0.6);
   }

   label {
      width: 100%;
      display: block;
      position: relative;
      margin-bottom: 32px;
   }

   input {
      width: 100%;
      padding: 18px 18px 18px 44px;
      border: none;
      outline: none;
      background-color: var(--input-background-color);
      border-radius: 10px;
      font-size: 16px;
      line-height: 1.25;

      &:not(:placeholder-shown) {
         background-color: var(--input-background-color);
      }

      &::placeholder {
         color: rgba(16, 24, 40, 0.6);
      }

      &:not(:placeholder-shown) + svg {
         fill: transparent;
         stroke: var(--primary-color);
      }
   }

   svg {
      fill: transparent;
      stroke: #b9b9bd;
      position: absolute;
      top: 18px;
      left: 18px;
   }
`;

export const FilterTitle = styled.h4`
   margin-bottom: 14px;
   font-weight: 500;
   font-size: 16px;
   line-height: 1.5;
   color: rgba(16, 24, 40, 0.6);
`;

export const EquipmentTitle = styled.h5`
   margin-bottom: 24px;
   font-weight: 600;
   font-size: 20px;
   line-height: 1.2;
`;

export const Line = styled.hr`
   margin-bottom: 24px;
   border-color: rgba(16, 24, 40, 0.1);
`;

export const EquipmentList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   margin-bottom: 32px;

   svg {
      fill: transparent;
      stroke: var(--primary-color);
   }
`;

export const EquipmentLabel = styled.label`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   row-gap: 8px;

   cursor: pointer;
   width: 112px;
   height: 95px;

   border: 1px solid rgba(16, 24, 40, 0.2);
   border-radius: 10px;
   font-weight: 500;
   font-size: 16px;
   line-height: 1.25;
   text-align: center;
   color: var(--primary-color);
`;

export const EquipmentCheckbox = styled.input`
   display: none;

   &:checked ~ label {
      border-color: var(--button-color);
   }
`;

export const VehicleType = styled.input`
   display: none;

   &:checked ~ label {
      border-color: var(--button-color);
   }
`;

export const SearchBtn = styled.button`
   padding: 16px 60px;
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
