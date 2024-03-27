import React from "react";
import FeaturesDetailsList from "../FeaturesDetailsList";
import VehicleDetails from "../VehicleDetails";
import { FeaturesStyled, VehicleDetailsBox, Line } from "./Features.styled";

const Features = ({ item }) => {
   const { adults, transmission, engine } = item;
   const detailsFull = { adults, transmission, engine, ...item.details };
   return (
      <FeaturesStyled>
         <FeaturesDetailsList details={detailsFull} />
         <VehicleDetailsBox>
            <h3>Vehicle details</h3>
            <Line />
            <VehicleDetails item={item} />
         </VehicleDetailsBox>
      </FeaturesStyled>
   );
};

export default Features;
