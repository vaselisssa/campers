import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, children }) => {
   useEffect(() => {
      const handleKeyDown = (e) => {
         if (e.code === "Escape") {
            onClose();
         }
      };

      document.body.style.overflow = "hidden";

      window.addEventListener("keydown", handleKeyDown);

      return () => {
         window.removeEventListener("keydown", handleKeyDown);
         document.body.style.overflow = "visible";
      };
   }, [onClose]);

   const handleBackdropClick = (event) => {
      if (event.currentTarget === event.target) {
         onClose();
      }
   };

   return createPortal(
      <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>,
      modalRoot
   );
};

export default Modal;
