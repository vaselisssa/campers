import sprite from "../../assets/icons/sprite.svg";
import React from "react";

const Icon = ({ icon, width, height }) => {
   return (
      <svg width={width} height={height}>
         <use href={`${sprite}#${icon}`}></use>
      </svg>
   );
};

export default Icon;
