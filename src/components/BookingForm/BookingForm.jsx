import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";
import { addBooking } from "../../redux/adverts/advertsSlice";
import Icon from "../Icon";
import Calendar from "../Calendar";
import {
   FormStyled,
   FormTitle,
   Label,
   InputStyled,
   CommentStyled,
   ErrorText,
   SubmitButton,
} from "./BookingForm.styled";

const validationSchema = Yup.object().shape({
   name: Yup.string().required("User name is required"),
   email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
   startDate: Yup.date().required("Start date is required"),
});

const BookingForm = () => {
   const dispatch = useDispatch();

   return (
      <Formik
         initialValues={{
            name: "",
            email: "",
            startDate: "",
            comment: "",
         }}
         validationSchema={validationSchema}
         onSubmit={({ name, email, startDate, comment }, actions) => {
            const formattedDate = format(new Date(startDate), "yyyy-MM-dd");
            const formData = {
               name,
               email,
               startDate: formattedDate,
               comment,
            };

            dispatch(addBooking(formData));

            actions.resetForm();
         }}
      >
         {({ isSubmitting }) => (
            <FormStyled>
               <FormTitle>Book your campervan now</FormTitle>

               <p>Stay connected! We are always ready to help you.</p>

               <InputStyled type="text" name="name" placeholder="Name" />
               <ErrorText name="name" component="div" />

               <InputStyled type="email" name="email" placeholder="Email" />
               <ErrorText name="email" component="div" />

               <Label>
                  <Icon icon="icon-calendar" width={20} height={20} />
                  <Calendar />
                  <ErrorText name="startDate" component="div" />
               </Label>

               <CommentStyled
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
               />

               <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"}
               </SubmitButton>
            </FormStyled>
         )}
      </Formik>
   );
};

export default BookingForm;
