import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from "formik";

export const FormStyled = styled(Form)`
   width: 448px;
   height: 532px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border: 1px solid rgba(16, 24, 40, 0.2);
   border-radius: 10px;
   padding: 24px;

   p {
      font-size: 16px;
      line-height: 1.5;
      color: var(--secondary-color);
      padding-bottom: 24px;
   }
`;

export const FormTitle = styled.h4`
   font-weight: 600;
   font-size: 20px;
   line-height: 1.2;
   padding-bottom: 8px;
`;

export const InputStyled = styled(Field)`
   margin-bottom: 15px;
   border-radius: 10px;
   font-size: 16px;
   line-height: 1.25;
   background-color: var(--input-background-color);
   padding: 18px;
   width: 100%;
   border: none;
   outline: none;

   &:not(:placeholder-shown) {
      background-color: var(--input-background-color);
   }
`;

export const Label = styled.label`
   position: relative;

   svg {
      position: absolute;
      top: 20px;
      right: 18px;
      z-index: 2;
      fill: #fff;
      stroke: var(--primary-color);
   }

   input {
      margin-bottom: 15px;
      border-radius: 10px;
      font-size: 16px;
      line-height: 1.25;
      background-color: var(--input-background-color);
      padding: 18px;
      width: 400px;
      border: none;
      outline: none;

      &:not(:placeholder-shown) {
         background-color: var(--input-background-color);
      }
   }
`;

export const CommentStyled = styled(Field)`
   resize: none;
   width: 100%;
   height: 114px;
   margin-bottom: 24px;
   border-radius: 10px;
   font-size: 16px;
   line-height: 1.25;
   background-color: var(--input-background-color);
   padding: 18px;
   width: 100%;
   border: none;
   outline: none;

   &:not(:placeholder-shown) {
      background-color: var(--input-background-color);
   }
`;

export const ErrorText = styled(ErrorMessage)`
   color: var(--button-color);
`;

export const SubmitButton = styled.button`
   align-self: flex-start;
   background-color: var(--button-color);
   border: none;
   outline: none;
   padding: 16px 60px;
   border-radius: 200px;
   font-weight: 500;
   font-size: 16px;
   line-height: 1.5;
   letter-spacing: -0.01em;
   color: #fff;
   transition: background-color 250ms linear;

   &:hover {
      background-color: #d84343;
   }
`;
