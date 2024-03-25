import React from "react";
import FeaturesDetailsList from "../FeaturesDetailsList";
import VehicleDetails from "../VehicleDetails";
import {
   FeaturesStyled,
   FeaturesWrapper,
   VehicleDetailsBox,
   Line,
   FormBox,
} from "./Features.styled";

const Features = ({ item }) => {
   const { adults, transmission, engine } = item;
   const detailsFull = { adults, transmission, engine, ...item.details };
   return (
      <FeaturesStyled>
         <FeaturesWrapper>
            <FeaturesDetailsList details={detailsFull} />
            <VehicleDetailsBox>
               <h3>Vehicle details</h3>
               <Line />
               <VehicleDetails item={item} />
            </VehicleDetailsBox>
         </FeaturesWrapper>
         <FormBox></FormBox>
      </FeaturesStyled>
   );
};

export default Features;
