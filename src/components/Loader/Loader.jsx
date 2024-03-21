import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
   return (
      <ColorRing
         visible={true}
         height="200"
         width="200"
         ariaLabel="color-ring-loading"
         wrapperStyle={{}}
         wrapperClass="color-ring-wrapper"
         colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
   );
};

export default Loader;
