import React from "react";

import Icon from "../Icon";
import { AdvertModalContent, CloseBtn } from "./AdvertModal.styled";

const AdvertModal = ({item, onClose }) => {
 

   return (
      <AdvertModalContent>
         <CloseBtn type="button" onClick={onClose}>
            <Icon icon="icon-close" width={32} height={32} />
         </CloseBtn>
         <h2>{item.name}</h2>
         <p>Description: {item.description}</p>
         <p>Price: €{item.price.toFixed(2)}</p>
         <p>Rating: {item.rating}</p>
         <p>Location: {item.location}</p>
         {/* Другие детали, если есть */}
      </AdvertModalContent>
   );
};

export default AdvertModal;
