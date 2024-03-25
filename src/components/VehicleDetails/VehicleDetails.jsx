import React from "react";

import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

import {
   VehicleDetailsStyled,
   VehicleDetailItem,
} from "./VehicleDetails.styled";

const VehicleDetails = ({ item }) => {
   return (
      <VehicleDetailsStyled>
         <VehicleDetailItem>
            <p>Form</p>
            <p>{capitalizeFirstLetter(item.form)}</p>
         </VehicleDetailItem>
         <VehicleDetailItem>
            <p>Length</p>
            <p>{item.length}</p>
         </VehicleDetailItem>
         <VehicleDetailItem>
            <p>Width</p>
            <p>{item.width}</p>
         </VehicleDetailItem>
         <VehicleDetailItem>
            <p>Height</p>
            <p>{item.height}</p>
         </VehicleDetailItem>
         <VehicleDetailItem>
            <p>Tank</p>
            <p>{item.tank}</p>
         </VehicleDetailItem>
         <VehicleDetailItem>
            <p>Consumption</p>
            <p>{item.consumption}</p>
         </VehicleDetailItem>
      </VehicleDetailsStyled>
   );
};

export default VehicleDetails;
