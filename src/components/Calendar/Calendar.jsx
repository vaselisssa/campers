import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { useField, useFormikContext } from "formik";

import "./styles.css";

const Calendar = () => {
   const { setFieldValue } = useFormikContext();
   const [field] = useField("startDate");

   return (
      <>
         <DatePicker
            {...field}
            minDate={new Date()}
            name="startDate"
            calendarStartDay={1}
            dateFormat="d MMM yyyy"
            selected={field.value}
            onChange={(val) => {
               setFieldValue(field.name, val);
            }}
            placeholderText="Booking date"
            autoComplete="off"
         />
      </>
   );
};

export default Calendar;
