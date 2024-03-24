import React, { useState } from "react";
import Icon from "../Icon";

import {
   Rating,
   Location,
   Price,
   ImgThumb,
} from "../AdvertItem/AdvertItem.styled";
import {
   AdvertModalContent,
   CloseBtn,
   Title,
   RatingLocationWrapper,
   ScrollBox,
   GalleryWrapper,
   Description,
   TabsBox,
   Tab,
   Line,
} from "./AdvertModal.styled";

const AdvertModal = ({ item, onClose }) => {
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index) => {
      setActiveTab(index);
   };

   return (
      <AdvertModalContent>
         <CloseBtn type="button" onClick={onClose}>
            <Icon icon="icon-close" width={32} height={32} />
         </CloseBtn>
         <Title>{item.name}</Title>
         <RatingLocationWrapper>
            <Rating>
               <Icon icon="icon-star" width={16} height={16} />
               <button type="button" aria-label="Open reviews">
                  {`${item.rating}(${item.reviews.length} Reviews)`}
               </button>
            </Rating>

            <Location>
               <Icon icon="icon-location" width={16} height={16} />
               <p>{item.location.split(",").reverse().join(", ")}</p>
            </Location>
         </RatingLocationWrapper>

         <Price>€{item.price.toFixed(2)}</Price>
         <ScrollBox>
            <GalleryWrapper>
               <ImgThumb>
                  <img src={item.gallery[0]} alt={item.name} />
               </ImgThumb>
               <ImgThumb>
                  <img src={item.gallery[1]} alt={item.name} />
               </ImgThumb>
               <ImgThumb>
                  <img src={item.gallery[2]} alt={item.name} />
               </ImgThumb>
            </GalleryWrapper>

            <Description>Description: {item.description}</Description>
         </ScrollBox>
         <TabsBox>
            <Tab
               active={activeTab === 1}
               onClick={() => handleTabClick(1)}
               isActive={activeTab === 1}
            >
               Features
            </Tab>
            <Tab
               active={activeTab === 2}
               onClick={() => handleTabClick(2)}
               isActive={activeTab === 2}
            >
               Reviews
            </Tab>
         </TabsBox>
         <Line />
      </AdvertModalContent>
   );
};

export default AdvertModal;
