import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   addToFavorites,
   removeFromFavorites,
} from "../../redux/adverts/advertsSlice.js";
import { selectFavorites } from "../../redux/adverts/selectors";

import Icon from "../Icon";
import DetailsList from "../DetailsList";
import Modal from "../Modal";
import AdvertModal from "../AdvertModal";
import {
   AdvertItemStyled,
   ImgThumb,
   InfoBox,
   TitleWrapper,
   Title,
   PriceWrapper,
   Price,
   ToggleFavBtn,
   RatingLocationWrapper,
   Rating,
   Location,
   Description,
   ShowMoreBtn,
} from "./AdvertItem.styled";

const AdvertItem = ({ item }) => {
   const dispatch = useDispatch();
   const favorites = useSelector(selectFavorites);

   const isFavorite = useMemo(
      () => favorites.find((el) => el._id === item._id),
      [favorites, item._id]
   );

   const [modalOpen, setModalOpen] = useState(false);

   const handleToggleFavorite = () => {
      if (!isFavorite) {
         dispatch(addToFavorites(item));
         return;
      }
      dispatch(removeFromFavorites(item._id));
   };

   const toggleModal = () => {
      setModalOpen(!modalOpen);
   };

   return (
      <AdvertItemStyled>
         <ImgThumb>
            <img src={item.gallery[0]} alt={item.name} />
         </ImgThumb>

         <InfoBox>
            <TitleWrapper>
               <Title>{item.name}</Title>

               <PriceWrapper>
                  <Price>€{item.price.toFixed(2)}</Price>
                  <ToggleFavBtn
                     type="button"
                     aria-label="Toggle Favorites"
                     onClick={handleToggleFavorite}
                     $favorite={!!isFavorite}
                  >
                     <Icon icon="icon-heart" width={24} height={24} />
                  </ToggleFavBtn>
               </PriceWrapper>
            </TitleWrapper>

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
            <Description>{item.description}</Description>

            <DetailsList data={item} />
            <ShowMoreBtn
               type="button"
               aria-label="Show more details"
               onClick={toggleModal}
            >
               Show more
            </ShowMoreBtn>
         </InfoBox>
         {modalOpen && (
            <Modal onClose={toggleModal}>
               <AdvertModal item={item} onClose={toggleModal} />
            </Modal>
         )}
      </AdvertItemStyled>
   );
};

export default AdvertItem;
