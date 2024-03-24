import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/adverts/selectors";
import AdvertItem from "../../components/AdvertItem";
import { FavListStyled, EmptyFav } from "./Favorites.styled";

const Favorites = () => {
   const favorites = useSelector(selectFavorites);
   return (
      <>
         {favorites.length > 0 ? (
            <FavListStyled>
               {favorites.map((el) => (
                  <AdvertItem key={el._id} item={el} />
               ))}
            </FavListStyled>
         ) : (
            <EmptyFav>
               Looks like your favorites list is empty. Let's add some
               favorites!
            </EmptyFav>
         )}
      </>
   );
};

export default Favorites;
