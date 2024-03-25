import React from "react";
import FeaturesDetailsList from "../FeaturesDetailsList";
import {
   FeaturesStyled,
   FeaturesWrapper,
   VehicleDetails,
   FormBox,
} from "./Features.styled";

const Features = ({ item }) => {
   const { adults, transmission, engine } = item;
   const detailsFull = { adults, transmission, engine, ...item.details };
   return (
      <FeaturesStyled>
         <FeaturesWrapper>
            <FeaturesDetailsList details={detailsFull} />
            <VehicleDetails>
               <h3>Vehicle details</h3>
            </VehicleDetails>
         </FeaturesWrapper>
         <FormBox></FormBox>
      </FeaturesStyled>
   );
};

export default Features;
