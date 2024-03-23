import React from "react";
import Icon from "../Icon";
import { DetailsListStyled } from "./DetailsList.styled";

const DetailsList = ({ data }) => {
   return (
      <DetailsListStyled>
         <li>
            <Icon icon="icon-adults" width={20} height={20} />
            {data.adults} adults
         </li>

         <li className="capitalized">
            <Icon icon="icon-transmission" width={20} height={20} />
            {data.transmission}
         </li>

         <li className="capitalized">
            <Icon icon="icon-petrol" width={20} height={20} />
            {data.engine}
         </li>

         {data.details.kitchen >= 1 && (
            <li>
               <Icon icon="icon-kitchen" width={20} height={20} />
               Kitchen
            </li>
         )}

         <li>
            <Icon icon="icon-bed" width={20} height={20} />
            {data.details.beds} beds
         </li>

         {data.details.airConditioner >= 1 && (
            <li>
               <Icon icon="icon-ac" width={20} height={20} />
               AC
            </li>
         )}
      </DetailsListStyled>
   );
};

export default DetailsList;
